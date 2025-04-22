import foto from '../img/Foto.jpg';
import './style/Foto.css';

function Foto() {
  return (
    <div className="Foto">
      <header className="Foto-header">
        <img src={foto} className="Foto-img" alt="foto" />
      </header>
    </div>
  );
}

export default Foto;
