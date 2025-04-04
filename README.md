# Hype Gear - E-commerce de Ropa

## Descripción
Hype Gear es una tienda en línea para la venta de ropa con una experiencia de usuario optimizada. La aplicación está desarrollada con React.js y utiliza Firebase para la gestión de productos, órdenes y autenticación.

## Características
- **Catálogo de Productos**: Visualización de productos con detalles y filtrado por categorías.
- **Carrito de Compras**: Agregar, eliminar y visualizar productos antes de finalizar la compra.
- **Wishlist**: Guardar productos para futuras compras.
- **Gestión de Órdenes**: Visualización de pedidos realizados por el usuario.
- **Autenticación con Google**: Inicio de sesión mediante Google para evitar compras con cuentas no deseadas.
- **Base de Datos en Firebase**: Almacenamiento de productos y órdenes en Firestore.

## Tecnologías Utilizadas
- React.js + Vite
- Bootstrap (para el diseño y estilos)
- Firebase (Firestore, Authentication)
- React Router (para la navegación)
- Context API (gestión del carrito de compras)

## Instalación
1. Clona el repositorio:
   ```bash
  git clone https://github.com/AxelElHilon/hypegear-ElHilon.git
   ```
2. Entra al directorio del proyecto:
   ```bash
   cd hypegear-ElHilon
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Configura Firebase:
   - Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).
   - Habilita Firestore y Authentication con Google.
   - Crea un archivo `.env` en la raíz del proyecto con tus credenciales de Firebase:
     ```env
     VITE_API_KEY=tu_api_key
     VITE_AUTH_DOMAIN=tu_auth_domain
     VITE_PROJECT_ID=tu_project_id
     VITE_STORAGE_BUCKET=tu_storage_bucket
     VITE_MESSAGING_SENDER_ID=tu_messaging_sender_id
     VITE_APP_ID=tu_app_id
     ```
5. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Uso
1. **Explora el catálogo** y agrega productos al carrito.
2. **Inicia sesión con Google** para completar la compra.
3. **Finaliza tu compra** y obtén un ID de orden.
4. **Consulta tus órdenes** en la sección correspondiente.

## Estado Actual
- ✅ Implementación del carrito de compras.
- ✅ Integración con Firebase para productos y órdenes.
- ✅ Autenticación con Google.
- 🔧 Mejoras en la interfaz y optimización del rendimiento.

## Contribuciones
Si deseas contribuir, abre un issue o un pull request en este repositorio.




