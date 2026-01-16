# 📝 Notas de Desarrollo - Mi Cambio

## 🎯 Descripción del Proyecto

**Mi Cambio** es una aplicación web para registrar, monitorear y optimizar entrenamientos de salto de cuerda. Permite a los usuarios visualizar su progreso, mejorar su técnica y alcanzar objetivos de manera consistente.

---

## ✅ Completado

### Página Principal (index.html)

- [x] Estructura básica con navbar y navegación
- [x] Hero section con descripción clara de la app
- [x] 6 features principales con iconos y descripciones
- [x] Sección de beneficios
- [x] Llamadas a acción (CTA) estratégicamente ubicadas
- [x] Footer con branding
- [x] Diseño responsive (mobile-first)
- [x] Integración con Tailwind CSS
- [x] Manejo de links públicos/privados según estado de sesión

### Autenticación

- [x] Página de login (login.html)
- [x] Página de registro (registro.html)
- [x] Sistema Firebase configurado
- [x] Validación de sesiones

### Estructura de Carpetas

- [x] Organización de assets
- [x] Módulos de componentes (nav.js, user.js, perfil.js)
- [x] Módulo de salto de cuerda con contador y temporizador

---

## 🚀 En Desarrollo

### Panel de Administración

- [ ] Diseño e implementación del panel principal
- [ ] Dashboard con estadísticas generales
- [ ] Visualización de datos de entrenamiento

### Funcionalidad Principal

- [ ] Crear nueva sesión de entrenamiento
- [ ] Registrar saltos y duración
- [ ] Guardar sesiones en base de datos
- [ ] Editar/eliminar sesiones anteriores

### Análisis y Reportes

- [ ] Gráficos de progreso
- [ ] Estadísticas semanales/mensuales
- [ ] Comparativa de mejoras

### Perfil de Usuario

- [ ] Actualizar información personal
- [ ] Establecer objetivos
- [ ] Visualizar historial de entrenamientos
- [ ] Configuración de preferencias

---

## 📋 Por Hacer

### Features Futuras

- [ ] Sistema de desafíos entre usuarios
- [ ] Notificaciones de recordatorio de entrenamiento
- [ ] Exportar datos en PDF/Excel
- [ ] Modo offline
- [ ] Integración con wearables
- [ ] Comunidad y compartir logros
- [ ] Planes de entrenamiento personalizados

### Mejoras UX/UI

- [ ] Animaciones suaves
- [ ] Temas oscuros/claros
- [ ] Optimización de performance
- [ ] Accesibilidad mejorada

### Testing

- [ ] Tests unitarios
- [ ] Tests de integración
- [ ] Testing en diferentes dispositivos

---

## 🛠️ Stack Técnico

- **Frontend:** HTML5, CSS (Tailwind), JavaScript (ES6+)
- **Backend:** Firebase (Authentication, Firestore)
- **Responsive:** Mobile-first design
- **Componentes:** Modular architecture (JS modules)

---

## 📱 Páginas del Proyecto

1. **index.html** - Página principal (completada) ✅
2. **login.html** - Login de usuarios ✅
3. **registro.html** - Registro de nuevos usuarios ✅
4. **panelAdministracion.html** - Panel principal del usuario 🔲
5. **perfil.html** - Perfil del usuario 🔲
6. **modules/cuerda/contadorSaltos.html** - Contador de saltos 🔲
7. **modules/cuerda/temporizador.html** - Temporizador 🔲

---

## 🔄 Próximos Pasos

1. Implementar panel de administración con dashboard
2. Crear funcionalidad de nueva sesión de entrenamiento
3. Conectar base de datos para guardar sesiones
4. Implementar gráficos de progreso
5. Diseñar página de perfil del usuario

---

## 📊 Estado General

- **Progreso:** 25%
- **Última actualización:** 16 de Enero, 2026
- **Responsable:** Salva

---

## 📌 Notas Importantes

- Usar colores principal: `#f97316` (naranja)
- Mantener diseño responsive
- Firebase está configurado en js/firebase.js
- Usar componentes modulares en js/components/
- Seguir estructura de carpetas existente
