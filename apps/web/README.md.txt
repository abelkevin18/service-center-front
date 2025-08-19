# 🔧 Service Center Front - Monorepo

Sistema de gestión de centro de servicios que funciona tanto en **Web** como en **Mobile** (iOS/Android) compartiendo el 95% del código.

## 🚀 Características Principales

- ✅ **Monorepo:** Un solo repositorio para web y móvil
- ✅ **Código Compartido:** 95% del código reutilizable entre plataformas
- ✅ **Multiplataforma:** Web, iOS y Android desde una base de código
- ✅ **Backend Integration:** Consumo de APIs Spring Boot
- ✅ **Estado Global:** Manejo centralizado del estado
- ✅ **Navegación Unificada:** Misma experiencia en todas las plataformas

## 📁 Estructura del Proyecto

```
service-center-front/
├── src/                          # 🎯 Código 100% compartido
│   ├── components/               # Componentes reutilizables
│   │   ├── ui/                  # Button, Input, Modal, etc.
│   │   └── features/            # ServiceCard, CustomerProfile, etc.
│   ├── screens/                 # Pantallas completas
│   │   ├── auth/               # Login, Register, ForgotPassword
│   │   ├── services/           # ServiceList, AddService, ServiceDetail
│   │   ├── customers/          # CustomerList, CustomerProfile
│   │   ├── dashboard/          # Dashboard, Analytics, Reports
│   │   └── settings/           # Settings, Profile, Preferences
│   ├── services/               # 🔥 APIs y lógica de negocio
│   │   ├── api.js             # Configuración base Axios
│   │   ├── authService.js     # Login, registro, tokens
│   │   ├── serviceService.js  # CRUD servicios
│   │   ├── customerService.js # Gestión clientes
│   │   └── reportService.js   # Reportes y analytics
│   ├── store/                  # Estado global
│   │   ├── authStore.js       # Estado autenticación
│   │   ├── serviceStore.js    # Estado servicios
│   │   ├── customerStore.js   # Estado clientes
│   │   └── index.js           # Store principal
│   ├── hooks/                  # Custom hooks compartidos
│   │   ├── useAuth.js         # Hook autenticación
│   │   ├── useServices.js     # Hook gestión servicios
│   │   ├── useCustomers.js    # Hook gestión clientes
│   │   └── useApi.js          # Hook llamadas API
│   ├── utils/                  # Utilidades y helpers
│   │   ├── validators.js      # Validaciones de formularios
│   │   ├── formatters.js      # Formato fechas, moneda, etc.
│   │   ├── constants.js       # Constantes de la aplicación
│   │   └── storage.js         # Manejo AsyncStorage
│   ├── navigation/             # Configuración navegación
│   │   ├── AppNavigator.js    # Navegador principal
│   │   ├── AuthNavigator.js   # Navegador autenticación
│   │   └── TabNavigator.js    # Navegador tabs
│   └── App.js                  # 🚀 App principal compartida
├── apps/                       # Entry points específicos
│   ├── web/                   # 🌐 Aplicación Web
│   │   ├── public/
│   │   │   ├── index.html
│   │   │   └── favicon.ico
│   │   ├── src/
│   │   │   ├── index.js       # Entry point web
│   │   │   └── App.js         # Wrapper web
│   │   ├── webpack.config.js  # Configuración Webpack
│   │   └── package.json       # Dependencias web
│   └── mobile/                # 📱 Aplicación Móvil
│       ├── android/           # Proyecto Android nativo
│       ├── ios/               # Proyecto iOS nativo
│       ├── App.js             # Entry point móvil
│       ├── index.js           # Registro componente
│       ├── babel.config.js    # Configuración Babel
│       ├── metro.config.js    # Configuración Metro
│       └── package.json       # Dependencias móvil
├── .gitignore                 # Archivos ignorados
├── package.json              # 📦 Dependencias compartidas
└── README.md                 # Este archivo
```

## 🛠️ Stack Tecnológico

### Frontend
- **React 18.2.0** - Librería base
- **React Native 0.74.5** - Framework móvil
- **React Native Web 0.19.12** - Adaptor para web
- **React Navigation 6.x** - Navegación
- **Axios 1.7.2** - Cliente HTTP
- **AsyncStorage** - Almacenamiento local

### Backend (Proyecto Separado)
- **Spring Boot 3.3.x** - Framework backend
- **Java 17/21** - Lenguaje backend
- **Spring Security** - Autenticación y autorización
- **JPA/Hibernate** - ORM base de datos

### Herramientas de Desarrollo
- **Webpack 5** - Bundler para web
- **Metro** - Bundler para React Native
- **Babel 7** - Transpilador JavaScript
- **ESLint** - Linter código

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js 18+ LTS** ([Descargar](https://nodejs.org/))
- **npm 8+** o **yarn 1.22+**
- **Git** ([Descargar](https://git-scm.com/))

#### Para desarrollo móvil:
- **Android Studio** ([Descargar](https://developer.android.com/studio))
- **Xcode** (Solo macOS - [App Store](https://apps.apple.com/app/xcode/id497799835))
- **JDK 17** ([Descargar](https://adoptium.net/))

### Instalación

```bash
# 1. Clonar repositorio
git clone https://github.com/abelkevin18/service-center-front
cd service-center-front

# 2. Instalar dependencias principales
npm install

# 3. Instalar dependencias específicas

# Web
cd apps/web
npm install
cd ../..

# Mobile
cd apps/mobile
npm install
cd ../..
```

### Configuración de Variables de Entorno

Crear archivo `.env` en la raíz del proyecto:

```env
# URLs del Backend
REACT_APP_API_URL_DEV=http://localhost:8080/api
REACT_APP_API_URL_PROD=https://tu-backend-produccion.com/api

# Configuración de la App
REACT_APP_NAME=Service Center
REACT_APP_VERSION=1.0.0

# Keys de servicios externos (opcional)
REACT_APP_GOOGLE_MAPS_KEY=tu_google_maps_key
REACT_APP_FIREBASE_KEY=tu_firebase_key
```

## 🏃‍♂️ Ejecutar en Desarrollo

### 🌐 Aplicación Web

```bash
# Ejecutar desde la raíz del proyecto
npm run dev:web

# O manualmente
cd apps/web
npm start
```

La aplicación web estará disponible en: **http://localhost:3000**

### 📱 Aplicación Móvil

#### 1. Iniciar Metro Bundler
```bash
# Desde la raíz del proyecto
npm run dev:mobile

# O manualmente
cd apps/mobile
npx react-native start
```

#### 2. Ejecutar en Android
```bash
# En otra terminal - desde la raíz
npm run android

# O manualmente
cd apps/mobile
npx react-native run-android
```

#### 3. Ejecutar en iOS (Solo macOS)
```bash
# En otra terminal - desde la raíz
npm run ios

# O manualmente
cd apps/mobile
npx react-native run-ios
```

## 📋 Scripts Disponibles

### Scripts Principales (desde la raíz)
```bash
npm run dev:web        # Ejecutar aplicación web
npm run dev:mobile     # Iniciar Metro bundler
npm run android        # Ejecutar en Android
npm run ios           # Ejecutar en iOS
npm run build:web     # Build de producción web
npm run clean         # Limpiar node_modules
npm run fresh-install # Reinstalación completa
npm run lint          # Verificar código con ESLint
npm run test          # Ejecutar tests
```

### Scripts Web (apps/web/)
```bash
npm start             # Desarrollo
npm run build         # Build producción
npm test              # Tests unitarios
npm run serve         # Servir build local
```

### Scripts Mobile (apps/mobile/)
```bash
npx react-native start                 # Metro bundler
npx react-native run-android          # Android
npx react-native run-ios              # iOS
npx react-native run-android --release # Android release
npx react-native run-ios --configuration Release # iOS release
```

## 🏗️ Desarrollo

### Agregar Nueva Funcionalidad

1. **Crear componentes** en `src/components/`
2. **Crear pantallas** en `src/screens/`
3. **Agregar servicios API** en `src/services/`
4. **Implementar hooks** en `src/hooks/`
5. **Configurar navegación** en `src/navigation/`

### Ejemplo: Agregar Nueva Pantalla

```javascript
// src/screens/inventory/InventoryScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useInventory } from '../../hooks/useInventory';

const InventoryScreen = () => {
  const { inventory, loading } = useInventory();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventario</Text>
      {/* Tu contenido aquí */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default InventoryScreen;
```

### Agregar Nuevo Servicio API

```javascript
// src/services/inventoryService.js
import api from './api';

export const inventoryService = {
  getInventory: async () => {
    try {
      const response = await api.get('/inventory');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  addItem: async (item) => {
    try {
      const response = await api.post('/inventory', item);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};
```

## 🧪 Testing

```bash
# Tests para toda la aplicación
npm test

# Tests específicos
cd apps/web && npm test        # Solo web
cd apps/mobile && npm test     # Solo mobile

# Tests con coverage
npm test -- --coverage
```

## 🏗️ Build y Deployment

### 🌐 Build Web

```bash
# Build de producción
npm run build:web

# Los archivos estarán en: apps/web/build/
```

**Deployment Web:**
- **Netlify:** Conectar repositorio y usar `apps/web/build/`
- **Vercel:** Configurar como monorepo con root en `apps/web/`
- **GitHub Pages:** Subir contenido de `apps/web/build/`

### 📱 Build Mobile

#### Android
```bash
cd apps/mobile

# Debug APK
npx react-native run-android --variant=release

# Release APK (para Play Store)
cd android
./gradlew assembleRelease

# APK estará en: android/app/build/outputs/apk/release/
```

#### iOS
```bash
cd apps/mobile

# Build para simulador
npx react-native run-ios --configuration Release

# Build para App Store (usar Xcode)
open ios/mobile.xcworkspace
# Archive > Distribute App
```

## 🔧 Configuración Avanzada

### Configurar Backend URL por Entorno

```javascript
// src/services/api.js
const getBaseURL = () => {
  if (process.env.NODE_ENV === 'production') {
    return process.env.REACT_APP_API_URL_PROD;
  }
  return process.env.REACT_APP_API_URL_DEV || 'http://localhost:8080/api';
};

const api = axios.create({
  baseURL: getBaseURL(),
  timeout: 10000,
});
```

### Configurar Navegación Condicional

```javascript
// src/navigation/AppNavigator.js
import { Platform } from 'react-native';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {Platform.OS === 'web' ? (
        <WebNavigator />
      ) : (
        <MobileNavigator />
      )}
    </NavigationContainer>
  );
};
```

## 🤝 Contribuir

1. **Fork** el proyecto
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** cambios (`git commit -am 'feat: agregar nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear **Pull Request**

### Convenciones de Commit

```bash
feat: nueva funcionalidad
fix: corrección de bug
docs: documentación
style: formato código
refactor: refactorización
test: agregar tests
chore: tareas mantenimiento
```

## 📞 Soporte

Si tienes problemas o preguntas:

1. **Issues:** [GitHub Issues](https://github.com/tu-usuario/service-center-front/issues)
2. **Documentación:** Este README
3. **Email:** tu-email@dominio.com

## 📝 Changelog

### v1.0.0 (2025-08-18)
- ✅ Configuración inicial del monorepo
- ✅ Estructura base compartida
- ✅ Configuración web con Webpack
- ✅ Configuración móvil con React Native
- ✅ Sistema de navegación
- ✅ Servicios API base
- ✅ Autenticación básica

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver [LICENSE.md](LICENSE.md) para detalles.

---

**Desarrollado con ❤️ para centros de servicios modernos**