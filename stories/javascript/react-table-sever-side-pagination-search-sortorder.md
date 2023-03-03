---
layout: post
title: React Table - Sever Side Pagination, Search, Sort/Order
author: darkterminal
created_at: 2023-02-17T11:52:52Z
language: javascript
---

### Metaphore Name

React Table - Sever Side Pagination, Search, Sort/Order

### Share your metaphore story!

![React-Table-Sever-Side-Pagination-Search-Sort-Order](https://user-images.githubusercontent.com/32319439/219619614-22efc4aa-f490-4f58-995e-2894fed2726c.gif)

## TLDR
This is a complete guide how I manage datatable in React JS project using `react-table` and `prisma` ORM. Let's start!

## Client Side

```javascript
// Component Filename: TablePagination.js

import {
    ArrowLongDownIcon,
    ArrowLongUpIcon,
    FunnelIcon,
} from "@heroicons/react/24/outline"
import { ClockIcon } from "@heroicons/react/24/solid"
import React from "react"
import {
    useAsyncDebounce,
    useGlobalFilter,
    usePagination,
    useSortBy,
    useTable,
} from "react-table"

function TablePagination({
    columns,
    data,
    fetchData,
    loading,
    pageCount: controlledPageCount,
    totalRow,
    actions: Actions,
}) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize, globalFilter, sortBy },
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            manualPagination: true,
            manualGlobalFilter: true,
            manualSortBy: true,
            initialState: {
                pageIndex: 0,
                pageSize: 10,
            }, // Pass our hoisted table state
            pageCount: controlledPageCount,
            autoResetSortBy: false,
            autoResetExpanded: false,
            autoResetPage: false,
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    )

    const GlobalFilter = ({
        preGlobalFilteredRows,
        globalFilter,
        setGlobalFilter,
    }) => {
        const count = preGlobalFilteredRows
        const [value, setValue] = React.useState(globalFilter)
        const onChange = useAsyncDebounce((value) => {
            setGlobalFilter(value || undefined)
        }, 700)

        return (
            <div
                className={
                    Actions !== undefined
                        ? "flex flex-row justify-between"
                        : "flex flex-col"
                }
            >
                {Actions !== undefined ? <Actions /> : null}
                <input
                    value={value || ""}
                    onChange={(e) => {
                        setValue(e.target.value)
                        onChange(e.target.value)
                    }}
                    placeholder={`${count} records...`}
                    type="search"
                    className={`input input-bordered input-sm w-full max-w-xs focus:outline-0 mb-2 ${
                        Actions !== undefined ? "" : "self-end"
                    }`}
                />
            </div>
        )
    }

    React.useEffect(() => {
        let search = globalFilter === undefined ? "" : globalFilter
        fetchData(pageSize, pageIndex, search, sortBy)
    }, [fetchData, pageIndex, pageSize, globalFilter, sortBy])

    return (
        <>
            <GlobalFilter
                preGlobalFilteredRows={totalRow}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
            <div className="overflow-x-auto relative">
                <table
                    {...getTableProps()}
                    className="table table-compact table-zebra w-full"
                >
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        {...column.getHeaderProps(
                                            column.getSortByToggleProps()
                                        )}
                                    >
                                        <span>
                                            {column.isSorted ? (
                                                column.isSortedDesc ? (
                                                    <ArrowLongDownIcon className="h-4 w-4 inline mr-1" />
                                                ) : (
                                                    <ArrowLongUpIcon className="h-4 w-4 inline mr-1" />
                                                )
                                            ) : (
                                                <FunnelIcon className="h-4 w-4 inline mr-1" />
                                            )}
                                        </span>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.length > 0 ? (
                            page.map((row, i) => {
                                prepareRow(row)
                                return (
                                    <tr
                                        {...row.getRowProps()}
                                        className="hover"
                                    >
                                        {row.cells.map((cell) => {
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {cell.render("Cell")}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })
                        ) : (
                            <tr className="hover">
                                <td colSpan={10000} className="text-center">
                                    Data not found!
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {loading ? (
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-5 rounded-md z-20 flex items-center justify-center">
                        <div className="absolute p-3 bg-white w-36 shadow-md rounded-md text-center">
                            <div className="flex animate-pulse">
                                <ClockIcon className="w-6 h-6 mr-1" />{" "}
                                <span>Loading...</span>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
            <div className="flex flex-row justify-between">
                <div className="mt-2">
                    <span>
                        Halaman{" "}
                        <strong>
                            {pageIndex + 1} dari {pageOptions.length}
                        </strong>{" "}
                        Total <strong>{preGlobalFilteredRows.length}</strong>{" "}
                    </span>
                    <span>
                        | Lompat ke halaman:{" "}
                        <input
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={(e) => {
                                const page = e.target.value
                                    ? Number(e.target.value) - 1
                                    : 0
                                gotoPage(page)
                            }}
                            className="input input-bordered input-sm w-20 max-w-xs focus:outline-0"
                        />
                    </span>{" "}
                    <select
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value))
                        }}
                        className="select select-bordered select-sm w-30 max-w-xs focus:outline-0"
                    >
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Tampilkan {pageSize} baris
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mt-2">
                    <button
                        className="btn btn-xs"
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                    >
                        {"<<"}
                    </button>{" "}
                    <button
                        className="btn btn-xs"
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                    >
                        {"<"}
                    </button>{" "}
                    <button
                        className="btn btn-xs"
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                    >
                        {">"}
                    </button>{" "}
                    <button
                        className="btn btn-xs"
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                    >
                        {">>"}
                    </button>{" "}
                </div>
            </div>
        </>
    )
}

export default TablePagination
```

### Dependencies
The component above generates a table with global filtering, pagination, sorting, and loading features. It uses the following dependencies: `@heroicons/react` for icons, `react` for the base library, and `react-table` for generating the table.

### Table Instance
`TablePagination` is a function that receives props that are used to display the table. The props are `columns` for the table columns, `data` for the data to be displayed, `fetchData` for fetching data when pagination is changed, `loading` to display the loading icon, `pageCount` for the number of pages, `totalRow` for the total row count, and `actions` for extra action buttons on the filter row.

The function creates a table instance using `useTable` from `react-table` and initializes the state of the table to the first page and ten rows per page. It also sets `manualPagination`, `manualGlobalFilter`, and `manualSortBy` to `true` so that the component has control over those features.

### Global Filtering
The `GlobalFilter` component displays the input search box used for filtering the table data. It also receives the pre-filtered row count and uses `useAsyncDebounce` to delay the search filter until the user stops typing. This helps reduce unnecessary calls to the server when searching.

### Table Body
The table body and header are then created using the `getTableProps` and `getTableBodyProps` methods from the react-table library. The `headerGroups` and page are used to map over the header columns and table data, respectively, using the map function. The `prepareRow` method is called on each row to enable the use of the `getRowProps` and `getCellProps` methods to style the row and cell.

### Sorting
The sorting feature is enabled by adding the `getHeaderProps` method to the column header and using the `column.getSortByToggleProps()` method. This method updates the `sortBy` object in the table state and adds the appropriate class and icon to the sorted column.

### Pagination
The pagination feature is enabled using `usePagination` and the `pageCount`, `canPreviousPage`, `canNextPage`, `pageOptions`, `gotoPage`, `nextPage`, `previousPage`, and `setPageSize` methods. These methods are used to generate the pagination controls and update the table state when the user interacts with them.

### Loading
Finally, the loading feature is enabled by checking if `loading` is true and displaying a loading icon in the table while data is being fetched from the server.

## Helpers
When we use API for pagination we also need a helper to serialized endpoint url before sending to server.

```javascript
// Filename: uriSerialized.js
const Util = {
    isArray: function (val) {
        return Object.prototype.toString.call(val) === "[object Array]"
    },
    isNil: function (val) {
        return val === null || Util.typeOf(val)
    },
    typeOf: function (val, type) {
        return (type || "undefined") === typeof val
    },
    funEach: function (obj, fun) {
        if (Util.isNil(obj)) return // empty value

        if (!Util.typeOf(obj, "object")) obj = [obj] // Convert to array

        if (Util.isArray(obj)) {
            // Iterate over array
            for (var i = 0, l = obj.length; i < l; i++)
                fun.call(null, obj[i], i, obj)
        } else {
            // Iterate over object
            for (var key in obj)
                Object.prototype.hasOwnProperty.call(obj, key) &&
                    fun.call(null, obj[key], key, obj)
        }
    },
}

export const uriSerialized = (params) => {
    let pair = []

    const encodeValue = (v) => {
        if (Util.typeOf(v, "object")) v = JSON.stringify(v)

        return encodeURIComponent(v)
    }

    Util.funEach(params, (val, key) => {
        let isNil = Util.isNil(val)

        if (!isNil && Util.isArray(val)) key = `${key}[]`
        else val = [val]

        Util.funEach(val, (v) => {
            pair.push(`${key}=${isNil ? "" : encodeValue(v)}`)
        })
    })

    return pair.join("&")
}
```

This code defines an object named `Util`, which contains several utility functions:

1. `isArray` checks whether a given value is an array or not. It does this by using the `Object.prototype.toString.call` method, which returns a string representing the object's type. If the string matches the expected value "`[object Array]`", then the value is considered an array.
2. `isNil` checks whether a given value is null or undefined. It does this by using the `typeOf` method to check if the type of the value is "undefined".
3. `typeOf` checks whether the given value is of a certain type. It does this by comparing the type of the value to the type provided as an argument. If the types match, it returns true.
4.  `funEach` is a utility function that can iterate over an array or an object and execute a given function for each element. If the given value is null or undefined, the function simply returns. If the value is not an object, it converts it to an array. If the value is an array, it iterates over each element and calls the given function with the element, index, and array as arguments. If the value is an object, it iterates over each key-value pair and calls the given function with the value, key, and object as arguments.

The code then exports a function named `uriSerialized`. This function takes an object `params` as input and returns a string representing the object as a URI-encoded string.

The function uses `Util.funEach` to iterate over the object and create an array of key-value pairs, where each value is URI-encoded. If the value is an array, the key is modified by appending "[]" to the end. The key-value pairs are then concatenated into a string with "&" as the separator, and returned.

## Services
For example when we need to create datatable for roles designation on a system.
```javascript
import axios from "axios"
import { uriSerialized } from "../Utils/uriSerialized"

export const getRoleDatatable = async (queryOptions = null) => {
    try {
        const query = queryOptions ? "?" + uriSerialized(queryOptions) : ""
        const request = await axios({
            method: "GET",
            url: `/roles/datatable${query}`,
        })
        const response = request.data
        return response
    } catch (error) {
        console.log(`getRoleDatatable error: ${error}`)
        return false
    }
}
```

This function makes a GET request to an API endpoint for a role datatable using the Axios HTTP client library.

The function accepts an optional parameter `queryOptions` which can be used to pass in query parameters to the API endpoint. If `queryOptions` is not null, it will be converted to a serialized URI string using the `uriSerialized` function imported from "../Utils/uriSerialized". The serialized URI string is then appended to the API endpoint URL.

The function then sends the HTTP request to the API endpoint using axios, and awaits for the response data. If the request is successful, the response data is returned. If the request fails, the error message is logged to the console and the function returns `false`.

## The Role Datatable
Woooooooooooooooooooooooooo.... implementing in `RoleDatatable` component
```javascript
import React, { useState, useCallback, useMemo } from "react"
import { getRoleDatatable } from "../../../services/roles"
import TablePagination from "../../TablePagination"
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid"

function RoleDatatable() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageCount, setPageCount] = useState(0)
    const [totalRow, setTotalRow] = useState(0)

    const fetchData = useCallback(
        async (pageSize, pageIndex, search, order) => {
            setLoading(true)
            const queryOptions = {
                page: pageIndex,
                limit: pageSize,
                search: search,
                order: order,
            }
            const items = await getRoleDatatable(queryOptions)

            setData(items.data)
            setPageCount(items.pagination.totalPage)
            setTotalRow(items.pagination.totalRow)
            setLoading(false)
        },
        []
    )

    const columns = useMemo(
        () => [
            {
                Header: "#",
                accessor: "roleId",
                Cell: ({ row }) => `R#${row.original.roleId}`,
                disableSortBy: true,
            },
            {
                Header: "Role Name",
                accessor: "roleName",
            },
            {
                Header: "Role Key",
                accessor: "roleKey",
                Cell: ({ row }) => row.original.roleKey,
            },
            {
                Header: "Action",
                accessor: ({ row }) => {
                    return (
                        <div className="flex gap-2">
                            <button className="btn btn-xs btn-info">
                                <PencilSquareIcon className="w-4 h-4" />
                            </button>
                            <button className="btn btn-xs btn-error">
                                <TrashIcon className="w-4 h-4" />
                            </button>
                        </div>
                    )
                },
            },
        ],
        []
    )

    return (
        <section>
            <TablePagination
                columns={columns}
                data={data}
                fetchData={fetchData}
                loading={loading}
                pageCount={pageCount}
                totalRow={totalRow}
            />
        </section>
    )
}

export default RoleDatatable
```

This is a functional React component that fetches data from the server, displays it in a paginated table, and provides the user with some action buttons for each item.

The component uses the `useState` hook to maintain its internal state, which includes `data`, `loading`, `pageCount`, and `totalRow`. The `fetchData` function is a `useCallback` hook, which makes an API call to the server with some query parameters to fetch the data, updates the state variables, and sets the loading flag.

The component also uses the `useMemo` hook to memoize the `columns` object that contains an array of objects, which define the headers of the table columns, their accessor functions, and a `Cell` function that returns the corresponding value for each row. The last column of the table has two buttons, `PencilSquareIcon` and `TrashIcon`, to allow the user to edit or delete an item.

The `TablePagination` component is a custom component that receives `columns`, `data`, `fetchData`, `loading`, `pageCount`, and `totalRow` as its props. This component is responsible for rendering the table, paginating it, and displaying the `loading` spinner while the data is being fetched. When the user clicks on the pagination links, `fetchData` is called with the new page index and page size, which triggers a new API call to the server with the updated query parameters.

Finally, the component is exported as the default export, which can be imported and used in other parts of the application.


That's the client side things!!! Terrace done!

## Server Side
Now move on the server side, we will use `prisma` as ORM in Express API.

Dependencies:
- lodash
- prisma
- a cup of coffee

### Role Datatable Model
```javascript
// Filename: Roles.js
const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
const _ = require('lodash')

exports.roleDatatable = async (
    page = 0,
    limit = 10,
    search = '',
    order = []
) => {
    try {
        var paginate = limit * page - 1
        var offset = paginate < 0 ? 0 : paginate
        const sort = _.isEmpty(order) ? [] : JSON.parse(_.first(order))
        const orderKey = _.isEmpty(sort) ? 'roleName' : sort.id
        const orderDirection = _.isEmpty(sort)
            ? 'desc'
            : sort.desc
            ? 'desc'
            : 'asc'

        const roles = await db.roles.findMany({
            where: {
                OR: [
                    {
                        roleName: {
                            contains: search,
                        },
                    },
                ],
                isDeleted: false,
            },
            skip: Number(offset),
            take: Number(limit),
            orderBy: {
                [orderKey]: orderDirection,
            },
        })

        const countTotal = await db.roles.count({
            where: {
                OR: [
                    {
                        roleName: {
                            contains: search,
                        },
                    },
                ],
                isDeleted: false,
            },
        })

        return {
            data: roles,
            totalRow: countTotal,
            totalPage: Math.ceil(countTotal / limit),
        }
    } catch (error) {
        console.log(`Error on roleDatatable: ${error}`)
        return false
    }
}
```

function called `roleDatatable` that queries a database to retrieve a paginated list of roles based on the given search criteria, sorting and pagination.

The function takes four optional parameters: `page`, `limit`, `search` and `order`. `page` and `limit` are used to determine the page size and the number of records to return, while search is used to filter the records based on a text string. order is an array that specifies the `order` in which the records should be sorted.

Inside the function, the `paginate` and `offset` variables are used to calculate the number of records to skip and take. The `sort`, `orderKey`, and `orderDirection` variables are used to specify the order by which the records should be sorted.

The function then queries the database using `db.roles.findMany()`, passing in the search criteria, pagination and sorting options. It also queries the total count of roles that match the search criteria, which is used to calculate the total number of pages.

The function returns an object that contains the paginated roles, the total number of rows, and the total number of pages. If an error occurs, it logs the error and returns false.

### Helpers
I need to format server response that sent to client using `formatResponse` helper
```javascript
// Filename: helpers/formatResponse.js
module.exports = (
    type,
    message = 'No desription',
    data = [],
    pagination = null
) => {
    const ALLOWED_TYPES = [
        'VALID',
        'INVALID',
        'FOUND',
        'NOT_FOUND',
        'INTERNAL_ERROR',
        'CREATED',
        'NOT_MODIFIED',
        'NOT_AUTHORIZED',
        'FORBIDDEN',
    ]
    if (!ALLOWED_TYPES.includes(type)) {
        throw `${type} is not allowed. Available type is ${ALLOWED_TYPES.join(
            ', '
        )}`
    }
    return pagination === null
        ? { type, message, data }
        : { type, message, data, pagination }
}
```
The function takes in four parameters: `type` (a string), `message` (a string with a default value of "No description"), `data` (an array with a default value of an empty array), and `pagination` (an optional object).

The function returns an object with the properties `type`, `message`, and `data`, and, if `pagination` is not `null`, includes the `pagination` object as well.

Before returning the object, the function checks if the `type` parameter is one of the allowed types by comparing it to an array of allowed types. If the `type` is not allowed, an error is thrown indicating which types are allowed.


### Router
Let's create API route for Role Datatable
```javascript
// Filename: routes/roles.js
const express = require('express')
const formatResponse = require('../../helpers/formatResponse')
const { roleDatatable } = require('../../models/Roles')

const router = express.Router()

router.get('/datatable', async (req, res) => {
    const { page, limit, search, order } = req.query
    const roles = await roleDatatable(page, limit, search, order)
    if (roles) {
        res.status(200).json(
            formatResponse('FOUND', 'Roles datatable', roles.data, {
                totalRow: roles.totalRow,
                totalPage: roles.totalPage,
            })
        )
    } else {
        res.status(404).json(formatResponse('NOT_FOUND', 'No data roles'))
    }
})

module.exports = router
```

his code sets up a router for an endpoint that returns a datatable of roles. The endpoint listens for GET requests to the '/datatable' path. When a request is received, it extracts the query parameters (page, limit, search, and order) from the request. It then calls the `roleDatatable` function from the Roles model with the query parameters. If `roleDatatable` returns data, the endpoint sends a response with a 200 status code and a JSON object containing the datatable data and pagination information. If `roleDatatable` returns no data, the endpoint sends a response with a 404 status code and a JSON object containing an error message.

The `formatResponse` function is used to format the response into a standard structure. It takes four parameters: type (a string that indicates the type of response), message (a string that provides additional details about the response), data (the data to be included in the response), and pagination (an optional object that contains pagination information). It returns an object that includes the four parameters.

Fiuh!!!! that's it... no puncline...

### A demo/repos link

_No response_