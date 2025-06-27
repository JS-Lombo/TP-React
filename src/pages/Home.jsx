import React, { useState } from 'react';

const products = [
  {
    title: 'Auriculares Bluetooth',
    image: 'https://www.bidcom.com.ar/publicacionesML/productos/ABLUE081/1000x1000-ABLUE81N.jpg',
    description: 'Auriculares inalámbricos con cancelación de ruido.',
    details: 'Compatibles con todos los dispositivos. Hasta 30h de batería.',
  },
  {
    title: 'Smartwatch Deportivo',
    image: 'https://epicbikes.com.ar/wp-content/uploads/2024/10/LW10_Black_01.jpg',
    description: 'Control de pasos, ritmo cardíaco y más.',
    details: 'Resistente al agua. Compatible con Android y iOS.',
  },
  {
    title: 'Cámara Profesional',
    image: 'https://www.lavanguardia.com/files/image_449_220/files/fp/uploads/2020/12/12/5fd4ebfda534b.r_d.1368-513-2970.jpeg',
    description: 'Cámara DSLR con lente intercambiable.',
    details: '24MP, grabación 4K, sensor CMOS.',
  },
  {
    title: 'Laptop Ultraliviana',
    image: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface-laptop-7th-edition-black-13-compare-render-copilot?scl=1',
    description: 'Laptop con diseño premium y SSD ultrarápido.',
    details: 'Intel i7, 16GB RAM, 512GB SSD, pantalla 14" FHD.',
  },
  {
    title: 'Mochila Antirrobo',
    image: 'https://http2.mlstatic.com/D_NQ_NP_799017-MLA72715910179_112023-O.webp',
    description: 'Perfecta para viajes y oficina.',
    details: 'Puerto USB externo, compartimentos secretos, resistente al agua.',
  },
  {
    title: 'Teclado Mecánico RGB',
    image: 'https://s3-sa-east-1.amazonaws.com/saasargentina/54Zba0WOWoJGtsnDP0Eq/imagen',
    description: 'Diseñado para gamers exigentes.',
    details: 'Switches azules, iluminación personalizable, diseño compacto.',
  },
];

const ProductCard = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <div className="card-body">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        {showDetails && <p className="details">{product.details}</p>}
        <button onClick={() => setShowDetails(prev => !prev)}>
          {showDetails ? 'Ocultar detalles' : 'Ver más detalles'}
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Productos Destacados</h1>
      <div className="card-grid">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;