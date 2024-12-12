import { QueryClient, QueryClientProvider } from "react-query";
import Content from "./content";
import Sidebar from "./Sidebar";
import Navbar from "./navbar";

const queryClient = new QueryClient();

// Wrapper for the main app, handles the overall layout.
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <main className="bg-[#070615] h-screen flex">
                <Sidebar />
                <div className="flex-1 flex flex-col bg-[#070615]">
                    <Navbar />
                    <Content />
                </div>
            </main>
        </QueryClientProvider>
    );
}

export default App;
