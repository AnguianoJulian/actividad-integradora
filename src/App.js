import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="price-table-container">
        <div class="table">
            <div class="title">Plan Basico</div>
            <div class="price">
                <span class="currency">$</span>
                <span class="number">25</span>
                <span class="frequency">/mo</span>
            </div>
            <div class="features">
                <ul>
                    <li>
                        <span class="material-icons check_circle"></span>
                        Facil acceso
                    </li>
                    <li>
                        <span class="material-icons check_circle"></span>
                        Variedad de productos 
                    </li>
                    <li>
                        <span class="material-icons check_circle"></span>
                        Ofertas
                    </li>
                </ul>
            </div>
            <div class="actions">
                <a href="#" class="btn">Try for free</a>
            </div>
        </div>
        <div class="table recommended">
            <div class="title">Startuo plan</div>
            <div class="price">
                <span class="currency">$</span>
                <span class="number">69</span>
                <span class="frequency">/mo</span>
            </div>
            <div class="features">
                <ul>
                    <li>
                        <span class="material-icons check_circle"></span>
                        Facil acceso
                    </li>
                    <li>
                        <span class="material-icons check_circle"></span>
                        Variedad de productos
                    </li>
                    <li>
                        <span class="material-icons check_circle"></span>
                        Ofertas 
                    </li>
                    <li>
                        <span class="material-icons check_circle"></span>
                        Envios gratis
                    </li>
                </ul>
            </div>
            <div class="actions">
                <a href="#" class="btn recommended">Try for free</a>
            </div>
        </div>
        <div class="table">
            <div class="title">Startuo plan</div>
            <div class="price">
                <span class="currency">$</span>
                <span class="number">99</span>
                <span class="frequency">/mo</span>
            </div>
            <div class="features">
                <ul>
                <li>
                        <span class="material-icons check_circle"></span>
                        Facil acceso
                    </li>
                    <li>
                        <span class="material-icons check_circle"></span>
                        Variedad de productos
                    </li>
                    <li>
                        <span class="material-icons check_circle"></span>
                        Ofertas 
                    </li>
                    <li>
                        <span class="material-icons check_circle"></span>
                        Envios gratis
                    </li>
                    <li>
                        <span class="material-icons check_circle"></span>
                        Garantia de 1 Año
                    </li>
                </ul>
            </div>
            <div class="actions">
                <a href="#" class="btn">Try for free</a>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
