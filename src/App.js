import { Route, Routes } from "react-router-dom"
import { menu } from "./routes/menu"
import BaseLayout from "./layouts/BaseLayout"
import { sidebar } from "./routes/sidebar"

function App() {
    return (
        <Routes>
            <Route element={<BaseLayout />}>
                {[...menu, ...sidebar].map((item, index) => (<Route key={index} path={item.path} element={item.component} />))}
            </Route>
        </Routes>
    )
}

export default App
