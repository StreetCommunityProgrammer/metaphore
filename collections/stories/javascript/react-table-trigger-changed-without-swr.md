---
layout: post
title: React Table Trigger Changed Without SWR
author: darkterminal
created_at: 2023-01-26T16:39:15Z
language: javascript
---

### The Back Story about this Metaphor

React Table Trigger Changed Without SWR

### Metaphore story

I'm into the world of javascript and reactjs is absolutely nil! And I found `react-table` from TanStack and it's really cool! That agnostic (What The Buff!)

And I'm trying to simplify my old way of working with `jQuery` when I was almost sinking to the bottom of the ocean (Hypertext Preprocessor) and didn't find the light of `JavaScript` as a complete combat tool more promising.

In jQuery I need to create a function to repeat the request and I trigger it from the targeted event and it's easy.

My question is how can I do the same thing but in `react-table` by not using any other library.

And here's what happened:

```javascript
// file: components/TablePagination.js
function TablePagination({
    columns,
    data,
    fetchData,
    loading,
    pageCount: controlledPageCount,
    totalRow,
    actions: Actions
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
        setGlobalFilter
    } = useTable(
        {
            columns,
            data,
            manualPagination: true,
            manualGlobalFilter: true,
            manualSortBy: true,
            initialState: {
                pageIndex: 0,
                pageSize: 10
            }, // Pass our hoisted table state
            pageCount: controlledPageCount,
            autoResetSortBy: false,
            autoResetExpanded: false,
            autoResetPage: false
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const GlobalFilter = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) => {
        const count = preGlobalFilteredRows
        const [value, setValue] = React.useState(globalFilter)
        const onChange = useAsyncDebounce(value => {
            setGlobalFilter(value || undefined)
        }, 700)

        return (
            <div className={Actions !== undefined ? 'flex flex-row justify-between' : 'flex flex-col'}>
                {Actions !== undefined ? (<Actions />) : null}
                <input
                    value={value || ""}
                    onChange={e => {
                        setValue(e.target.value);
                        onChange(e.target.value);
                    }}
                    placeholder={`${count} records...`}
                    type="search"
                    className={`input input-bordered input-sm w-full max-w-xs focus:outline-0 mb-2 ${Actions !== undefined ? '' : 'self-end'}`}
                />
            </div>
        )
    }

    React.useEffect(() => {
        let search = globalFilter === undefined ? '' : globalFilter
        fetchData(pageSize, pageIndex, search);
    }, [fetchData, pageIndex, pageSize, globalFilter, sortBy]);

    return (
        <>
            <GlobalFilter
                preGlobalFilteredRows={totalRow}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
            <div className="overflow-x-auto">
                <table {...getTableProps()} className='table table-compact table-zebra w-full'>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        <span>
                                            {column.isSorted ? column.isSortedDesc ? <ArrowLongDownIcon className='h-4 w-4 inline mr-1' /> : <ArrowLongUpIcon className='h-4 w-4 inline mr-1' /> : <FunnelIcon className='h-4 w-4 inline mr-1' />}
                                        </span>
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.length > 0 ? page.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()} className='hover'>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        }) : (<tr className='hover'>
                            <td colSpan={10000} className='text-center'>Data not found!</td>
                        </tr>)}
                        {loading ? (
                            <tr>
                                <td colSpan="10000">Loading...</td>
                            </tr>
                        ) : null}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-row justify-between">
                <div className='mt-2'>
                    <span>
                        Halaman{' '}
                        <strong>
                            {pageIndex + 1} dari {pageOptions.length}
                        </strong>{' '}
                        Total <strong>{preGlobalFilteredRows.length}</strong>{' '}
                    </span>
                    <span>
                        | Lompat ke halaman:{' '}
                        <input
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(page)
                            }}
                            className="input input-bordered input-sm w-20 max-w-xs focus:outline-0"
                        />
                    </span>{' '}
                    <select
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}
                        className="select select-bordered select-sm w-30 max-w-xs focus:outline-0"
                    >
                        {[10, 20, 30, 40, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Tampilkan {pageSize} baris
                            </option>
                        ))}
                    </select>
                </div>
                <div className='mt-2'>
                    <button className='btn btn-xs' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        {'<<'}
                    </button>{' '}
                    <button className='btn btn-xs' onClick={() => previousPage()} disabled={!canPreviousPage}>
                        {'<'}
                    </button>{' '}
                    <button className='btn btn-xs' onClick={() => nextPage()} disabled={!canNextPage}>
                        {'>'}
                    </button>{' '}
                    <button className='btn btn-xs' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        {'>>'}
                    </button>{' '}
                </div>
            </div>
        </>
    );
}

export default TablePagination
```
What I really want is that when I update data from a modal component (child), I can trigger the previous component (parent) I have to refresh the data in the table after a data change.

```javascript
// file: pages/Example.js (parent)
function Example() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [pageCount, setPageCount] = useState(0)
    const [totalRow, setTotalRow] = useState(0)
    const [refresh, setRefresh] = useState(false)

    const fetchData = useCallback(async (pageSize, pageIndex, search) => {
        setLoading(true)
        const queryOptions = {
            page: pageIndex,
            limit: pageSize,
            search: search
        }
        const customers = await customerDatatable(queryOptions)

        setData(customers.data)
        setPageCount(customers.pagination.totalPage)
        setTotalRow(customers.pagination.totalRow)
        setLoading(false)
        setRefresh(false)
    }, [refresh]);

    const columns = useMemo(
        () => [
            ....,
            {
                Header: 'Actions',
                accessor: (row) => {
                    return (
                        <div className='flex flex-row w-38'>
                            <ReuseableModal modalId={`modalEdit-${row.customer_uuid}`} btnClassName={`btn-xs btn-info mr-2`} btnContent={<PencilSquareIcon className='h-3 w-3' />} width='w-11/12 max-w-5xl'>
                                // here the child
                                <FormEdit data={row} setRefresh={setRefresh} modalTarget={row.customer_uuid} />
                            </ReuseableModal>
                        </div>
                    )
                },
                disableSortBy: true
            }
        ],
        []
    );

    return (
        <Fragment>
            <Helmet>
                <title>Example</title>
            </Helmet>
            <section className='p-3'>
                <div className="bg-base-300 p-3 rounded">
                    <TablePagination
                        columns={columns}
                        data={data}
                        fetchData={fetchData}
                        loading={loading}
                        pageCount={pageCount}
                        totalRow={totalRow}
                    />
                </div>
            </section>
        </Fragment>
    )
}

export default PelangganAktif
}
```

And here the modal popup

```javascript
// file: components/modal/FormEdit.js (child)
function FormEdit({ data, setRefresh, modalTarget }) {

    const { addToast } = useToast()
    const initValues = data

    const formSubmit = async (values) => {
        const updated = await customerUpdate(values)
        if (updated.type === 'success') {
            addToast('success', 'top-right', 'Data updated!', `${data.profiles.fullname} detail updated`, 5000)
            document.getElementById(`modalEdit-${modalTarget}`).click()
            setRefresh(true)
            resetForm()
        } else {
            addToast('error', 'top-right', 'Data failed to update!', `${data.profiles.fullname} defail failed to update`, 5000)
        }
    }

    const { values, errors, touched, handleChange, handleSubmit, resetForm } = useFormik({
        initialValues: initValues,
        onSubmit: formSubmit,
        enableReinitialize: true
    })
    
    return // your form here
}

export default FormEdit
```

That's it!

### A demo/repos link

_No response_
