# 🛍️ Mercado Express - Galería de Productos

Una aplicación web moderna y responsive para una tienda online con galería de productos, sistema de carrito de compras y simulación de pagos.

## ✨ Características

- 🏠 **Página de inicio atractiva** con hero section y productos destacados
- 🖼️ **Galería de productos** con filtros por categorías
- 🛒 **Sistema de carrito** con cálculo automático de precios
- 💳 **Simulación de pagos** para completar la compra
- 📱 **Diseño completamente responsive** para todos los dispositivos
- 📞 **Botón flotante de contacto** que abre un modal
- 🎨 **Interfaz moderna** con gradientes y animaciones
- ⚡ **Navegación rápida** entre todas las vistas

## 🚀 Tecnologías Utilizadas

- **React 19** - Biblioteca de interfaz de usuario
- **React Router DOM** - Enrutamiento de la aplicación
- **CSS Modules** - Estilos modulares y encapsulados
- **Vite** - Herramienta de construcción rápida
- **Responsive Design** - Diseño adaptable a todos los dispositivos

## 📱 Funcionalidades Principales

### 🏪 Página de Inicio
- Hero section con llamada a la acción
- Categorías de productos destacadas
- Productos en oferta
- Información de la tienda

### 🛍️ Galería de Productos
- Filtros por categorías (Electrónica, Ropa, Deportes, Muebles)
- Vista en grid responsive
- Navegación a detalles del producto

### 📋 Detalle del Producto
- Imagen del producto en alta resolución
- Información completa del producto
- Selector de cantidad
- Botón para agregar al carrito

### 🛒 Carrito de Compras
- Lista de productos seleccionados
- Modificación de cantidades
- Cálculo automático del total
- Eliminación de productos

### 💳 Checkout
- Resumen de la compra
- Simulación de proceso de pago
- Confirmación de la transacción

### 📞 Contacto
- Botón flotante siempre visible
- Modal de contacto con formulario
- Campos para nombre, email y mensaje

## 🎨 Diseño y UX

- **Paleta de colores moderna** con gradientes atractivos
- **Animaciones suaves** para mejorar la experiencia del usuario
- **Tipografía clara** y legible
- **Iconos emoji** para categorías y funcionalidades
- **Sombras y efectos** para dar profundidad
- **Transiciones fluidas** entre estados

## 📱 Responsive Design

La aplicación está completamente optimizada para:
- 📱 **Móviles** (320px - 768px)
- 💻 **Tablets** (768px - 1024px)
- 🖥️ **Desktop** (1024px+)

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd galeria-productos

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la construcción
npm run preview
```

## 🌐 Despliegue en Vercel

### Opción 1: Despliegue Automático
1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente que es una aplicación React
3. El despliegue se realizará automáticamente

### Opción 2: Despliegue Manual
1. Construye la aplicación:
```bash
npm run build
```

2. Instala Vercel CLI:
```bash
npm i -g vercel
```

3. Despliega:
```bash
vercel
```

### Opción 3: Desde el Dashboard de Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Crea una nueva cuenta o inicia sesión
3. Haz clic en "New Project"
4. Importa tu repositorio de GitHub
5. Vercel configurará automáticamente el proyecto

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ContactModal.jsx    # Modal de contacto
│   ├── FloatingContact.jsx # Botón flotante
│   ├── Footer.jsx          # Pie de página
│   └── Navbar.jsx          # Barra de navegación
├── data/               # Datos estáticos
│   └── products.js        # Lista de productos
├── pages/              # Páginas de la aplicación
│   ├── Checkout.jsx       # Página de checkout
│   ├── Home.jsx           # Página de inicio
│   ├── ProductDetail.jsx  # Detalle del producto
│   └── Productos.jsx      # Galería de productos
├── styles/              # Estilos CSS Modules
│   ├── App.module.css     # Estilos principales
│   ├── Checkout.module.css
│   ├── ContactModal.module.css
│   ├── FloatingContact.module.css
│   ├── Footer.module.css
│   ├── Home.module.css
│   ├── Navbar.module.css
│   ├── ProductDetail.module.css
│   └── Productos.module.css
├── App.jsx              # Componente principal
├── index.css            # Estilos globales
└── main.jsx             # Punto de entrada
```

## 🎯 Características de la Tienda

### 🏷️ Categorías de Productos
- **Electrónica** - Laptops, auriculares, cámaras
- **Ropa** - Camisetas, bolsos
- **Deportes** - Zapatillas, pelotas
- **Muebles** - Sillas de oficina

### 💰 Sistema de Precios
- Precios en Soles (S/)
- Cálculo automático por cantidad
- Total del carrito en tiempo real

### 🛒 Funcionalidades del Carrito
- Agregar productos con cantidad específica
- Modificar cantidades
- Eliminar productos
- Persistencia en localStorage
- Contador de productos en el navbar

## 🔧 Personalización

### Cambiar Colores
Los colores principales están definidos en los archivos CSS:
- **Color principal**: `#667eea`
- **Color secundario**: `#764ba2`
- **Color de acento**: `#ffd700`
- **Color de éxito**: `#28a745`
- **Color de error**: `#ff4757`

### Agregar Productos
Edita `src/data/products.js` para agregar nuevos productos:
```javascript
{
  id: 9,
  title: "Nuevo Producto",
  price: 150,
  category: "Nueva Categoría",
  img: "https://picsum.photos/seed/nuevo/600/400"
}
```

## 📱 Compatibilidad

- ✅ **Chrome** 90+
- ✅ **Firefox** 88+
- ✅ **Safari** 14+
- ✅ **Edge** 90+
- ✅ **Móviles** iOS 12+ / Android 8+

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Si tienes alguna pregunta o necesitas ayuda:
- 📧 Abre un issue en GitHub
- 💬 Contacta a través del modal de la aplicación
- 📱 Revisa la documentación de React y Vercel

---

**Desarrollado con ❤️ usando React y desplegado en Vercel**
