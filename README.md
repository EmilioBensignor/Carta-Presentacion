# 🎨 Personal Profile Card

Una tarjeta de perfil personal moderna con Material Design, perfecta para estudiantes que quieren crear su portafolio web.

## ✨ Características

- 🎨 **Material Design** con tipografía de Google Fonts
- 📱 **Diseño responsive** optimizado para móviles
- 🌟 **Animaciones suaves** y efectos visuales
- 🎯 **Fácil personalización** - solo modifica el contenido
- ⚡ **Rendimiento optimizado** para Vercel

## 📋 Secciones Incluidas

1. **Información Personal**

   - Foto de perfil
   - Nombre y apellidos
   - Edad
   - Zona de residencia
   - Carrera

2. **Habilidades** (4 opciones)

   - Texto simple sin iconos
   - Efectos hover interactivos

3. **Películas Favoritas** (3 opciones)

   - Lista simple de texto

4. **Discos Favoritos** (3 opciones)
   - Lista simple de texto

## 🚀 Cómo Usar

### 1. Descargar el Proyecto

```bash
git clone [URL_DE_TU_REPOSITORIO]
cd Personal-Profile-Card
```

### 2. Personalizar el Contenido

**⚠️ IMPORTANTE: Solo modifica el contenido, NO el código CSS o JavaScript**

#### 📸 Cambiar Foto de Perfil

En `index.html`, línea 25:

```html
<img src="TU_URL_DE_FOTO_AQUI" alt="Foto de perfil" class="profile-image" />
```

**Ejemplo con placeholder:**

```html
<img
  src="https://placehold.co/150x150/2196F3/FFFFFF?text=Tu+Foto"
  alt="Foto de perfil"
  class="profile-image"
/>
```

#### 👤 Información Personal

En `index.html`:

- **Nombre**: Línea 32 - `<h1 class="profile-name">Tu Nombre</h1>`
- **Apellido**: Línea 33 - `<h2 class="profile-lastname">Tu Apellido</h2>`
- **Edad**: Línea 36 - `<p class="profile-age">Edad: 25 años</p>`
- **Zona**: Línea 37 - `<p class="profile-location">📍 Zona de Residencia</p>`
- **Carrera**: Línea 38 - `<p class="profile-career">🎓 Tu Carrera</p>`

#### 🎯 Habilidades

En `index.html`, líneas 48-58:

```html
<div class="skill-item">
  <span class="skill-name">NUEVA_HABILIDAD</span>
</div>
```

**Ejemplo:**
```html
<div class="skill-item">
  <span class="skill-name">JavaScript</span>
</div>
```

#### 🎬 Películas Favoritas

En `index.html`, líneas 68-72:

```html
<div class="favorite-item">1. Nombre de la Película 1</div>
<div class="favorite-item">2. Nombre de la Película 2</div>
<div class="favorite-item">3. Nombre de la Película 3</div>
```

#### 🎵 Discos Favoritos

En `index.html`, líneas 82-86:

```html
<div class="favorite-item">1. Nombre del Disco 1</div>
<div class="favorite-item">2. Nombre del Disco 2</div>
<div class="favorite-item">3. Nombre del Disco 3</div>
```

### 3. Subir a GitHub

```bash
git add .
git commit -m "Personal Profile Card personalizada"
git push origin main
```

### 4. Publicar en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu cuenta de GitHub
3. Importa tu repositorio
4. ¡Listo! Tu Personal Profile Card estará online

## 🎨 Personalización Avanzada (Opcional)

### Cambiar Colores

En `styles.css`, busca estas líneas:

- Color principal: `#1976d2` (línea 89)
- Color de fondo: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` (línea 12)

### Cambiar Tipografía

En `index.html`, línea 8:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
  rel="stylesheet"
/>
```

## 📱 Características Técnicas

- **HTML5** semántico y accesible
- **CSS3** con Grid y Flexbox
- **JavaScript** vanilla para animaciones
- **Material Design** con iconos de Google
- **Responsive** para todos los dispositivos
- **Optimizado** para rendimiento web

## 🎯 Funcionalidades JavaScript

- ✨ Efecto fade-in al cargar
- 🎭 Animaciones hover interactivas
- 📱 Efectos de click en la foto
- 🌟 Animaciones escalonadas
- 💾 Soporte para modo oscuro automático

## 📝 Notas Importantes

1. **No modifiques** los archivos `styles.css` o `script.js` a menos que seas experto
2. **Solo cambia** el contenido en `index.html`
3. **Usa imágenes** de buena calidad para la foto de perfil
4. **Mantén** la estructura HTML intacta
5. **Prueba** en diferentes dispositivos antes de publicar

## 🆘 Solución de Problemas

### La foto no se muestra

- Verifica que la URL sea correcta
- Asegúrate de que la imagen sea pública
- Usa formatos: JPG, PNG, WebP
- Para placeholders usa: `https://placehold.co/150x150/COLOR_FONDO/COLOR_TEXTO?text=Tu+Texto`

### Los estilos no se cargan

- Verifica que todos los archivos estén en la misma carpeta
- Revisa la consola del navegador para errores

### No funciona en móviles

- El diseño es responsive por defecto
- Prueba en diferentes tamaños de pantalla

## 📞 Soporte

Si tienes problemas:

1. Revisa la consola del navegador (F12)
2. Verifica que todos los archivos estén presentes
3. Asegúrate de no haber modificado el CSS o JS

## 🎉 ¡Listo!

Tu Personal Profile Card estará lista para mostrar al mundo. ¡Comparte tu creación!

---

**Creado con ❤️ para estudiantes de desarrollo web**
