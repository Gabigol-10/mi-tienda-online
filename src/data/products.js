// src/data/products.js
const products = [
  { 
    id: 1, 
    title: "Laptop Gamer", 
    price: 4500, 
    category: "Electrónica", 
    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&h=400&fit=crop&crop=center"
  },
  { 
    id: 2, 
    title: "Auriculares Inalámbricos", 
    price: 30, 
    category: "Electrónica", 
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop&crop=center"
  },
  { 
    id: 3, 
    title: "Camiseta Deportiva", 
    price: 80, 
    category: "Ropa", 
    img: "https://images.unsplash.com/photo-1649771543037-916e2702008a?q=80&w=884&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 4, 
    title: "Zapatillas", 
    price: 260, 
    category: "Deportes", 
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop&crop=center"
  },
  { 
    id: 5, 
    title: "Silla Oficina", 
    price: 520, 
    category: "Muebles", 
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=center"
  },
  { 
    id: 6, 
    title: "Cámara Compacta", 
    price: 1800, 
    category: "Electrónica", 
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop&crop=center"
  },
  { 
    id: 7, 
    title: "Suéter Casual", 
    price: 140, 
    category: "Ropa", 
    img: "https://images.unsplash.com/photo-1687275160744-6cb5bb16544a?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 8, 
    title: "Pelota Fútbol", 
    price: 70, 
    category: "Deportes", 
    img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=400&fit=crop&crop=center"
  },
  { 
    id: 9, 
    title: "Smartphone Pro", 
    price: 2200, 
    category: "Electrónica", 
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop&crop=center"
  },
  { 
    id: 10, 
    title: "Jeans Clásicos", 
    price: 100, 
    category: "Ropa", 
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=400&fit=crop&crop=center"
  },
  { 
    id: 11, 
    title: "Medias de algodon", 
    price: 19, 
    category: "Deportes", 
    img: "https://images.unsplash.com/photo-1631180543602-727e1197619d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbGNldCVDMyVBRG58ZW58MHx8MHx8fDA%3D"
  },
  {
  id: 12,
  title: "Mesa Escritorio",
  price: 380,
  category: "Muebles",
  img: "https://images.unsplash.com/photo-1592778024290-548bcd706e33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVzYSUyMGRlJTIwZXNjcml0b3Jpb3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
  id: 13, 
    title: "Mouse Gamer", 
    price: 30, 
    category: "Electrónica", 
    img: "https://images.unsplash.com/photo-1628832307345-7404b47f1751?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcCUyMGdhbWVyfGVufDB8fDB8fHww"
},
{
  id: 14, 
    title: "MouTeclado  Gamer", 
    price: 50, 
    category: "Electrónica", 
    img: "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
},
{
  id: 15, 
    title: "Computadora Gamer", 
    price: 50, 
    category: "Electrónica", 
    img: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 16, 
    title: "MousePad Gamer", 
    price: 50, 
    category: "Electrónica", 
    img: "https://images.unsplash.com/photo-1625842269025-dc4640c2523e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdXNlcGFkfGVufDB8fDB8fHww"
},
{
  id: 17, 
    title: " Guantes de portero", 
    price: 58, 
    category: "Deportes", 
    img: "https://images.unsplash.com/photo-1632072820781-79f3a064f640?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VhbnRlcyUyMGRlJTIwcG9ydGVyb3xlbnwwfHwwfHx8MA%3D%3D"
},
{
  id: 18, 
    title: " Canasta de basquetbol", 
    price: 180, 
    category: "Deportes", 
    img: "https://images.unsplash.com/photo-1705594646253-e5dfef540bf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8"
},
{
  id: 19, 
    title: "Raqueta de tenis", 
    price: 180, 
    category: "Deportes", 
    img: "https://images.unsplash.com/photo-1617883861744-13b534e3b928?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFxdWV0YSUyMGRlJTIwdGVuaXN8ZW58MHx8MHx8fDA%3D"
},
];

export default products;
