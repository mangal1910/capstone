import LoginPanel from "./components/Login/Login"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      path(route='login', view=views.login_user, name='login'),
      path('login/', TemplateView.as_view(template_name="Home.html")),
    </Routes>
  );
}
export default App;
