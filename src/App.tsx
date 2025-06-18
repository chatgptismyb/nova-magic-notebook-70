import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Subscription from "./pages/Subscription";
import Checkout from "./pages/Checkout";
import Showcase from "./pages/Showcase";
import MagicNotebook from "./pages/MagicNotebook";
import Spellbook from "./pages/Spellbook";
import Dashboard from "./pages/Dashboard";
import TodoListPage from "./pages/TodoListPage";
import TodoNotePage from "./pages/TodoNotePage";
import CreateNote from "./pages/CreateNote";
import CreateTask from "./pages/CreateTask";
import DeployPage from "./pages/DeployPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/magic-notebook" element={<MagicNotebook />} />
          <Route path="/spellbook" element={<Spellbook />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/todos" element={<TodoListPage />} />
          <Route path="/todos/:noteId" element={<TodoNotePage />} />
          <Route path="/create-note" element={<CreateNote />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/deploy" element={<DeployPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;