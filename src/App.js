import NavigationProvider from "./components/context/navigation";
import Link from "./components/link/link";
import Route from "./components/route/route";
import Sidebar from "./components/sidebar/sidebar";
import AccordionPage from './pages/accordionPage'
import ButtonPage from './pages/buttonPage'
import DropdownPage from "./pages/dropdownPage";
import ModalPage from "./pages/modalPage";

function App() {
    return (
        <div className="container mx-auto grid grid-cols-10 gap-3 mt-4">
            <Sidebar className="col-span-2" />
            <div className="col-span-8">
                <Route path={ '/' }>
                    <DropdownPage />
                </Route>
                <Route path={ '/button' } >
                    <ButtonPage />
                </Route>
                <Route path={ '/accordion' }>
                    <AccordionPage />
                </Route>
                <Route path={ '/modal' }>
                    <ModalPage />
                </Route>
            </div>
        </div>
        
    )
}

export default App;