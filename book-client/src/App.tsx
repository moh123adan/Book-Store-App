import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisrerScreen";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* <LoginScreen /> */}
      <Header />
      <Home />
      <Footer />
      {/* <RegisterScreen /> */}
    </div>
  );
};

export default App;
