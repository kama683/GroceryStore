import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';

// =================================================
// 1. ИМПОРТЫ (Убедись, что все файлы созданы)
// =================================================

// --- Экраны Авторизации (Вход, Регистрация) ---
import { StartScreen } from '../screens/auth/StartScreen';     // Зеленый экран
import { RegisterScreen } from '../screens/auth/RegisterScreen'; // Ввод телефона
import { SmsCodeScreen } from '../screens/auth/SmsCodeScreen';   // СМС код
import { LoginScreen } from '../screens/auth/LoginScreen';       // Логин
import { OnboardingScreen } from '../screens/auth/OnboardingScreen'; // Добро пожаловать

// --- Экраны Главной Ленты ---
import { FeedScreen } from '../screens/home/FeedScreen';
import { UserProfileScreen } from '../screens/home/UserProfileScreen';
import { ShopDetailsScreen } from '../screens/home/ShopDetailsScreen';
import { ProductDetailsScreen } from '../screens/home/ProductDetailsScreen';
import { PostDetailsScreen } from '../screens/home/PostDetailsScreen';
import { SearchMainScreen } from '../screens/search/SearchMainScreen';
import { CategoriesListScreen } from '../screens/search/CategoriesListScreen';
import { SearchInputScreen } from '../screens/search/SearchInputScreen';

// --- Экраны Загрузки (Upload) ---
import { CreatePostScreen } from '../screens/upload/CreatePostScreen';
import { SelectProductScreen } from '../screens/upload/SelectProductScreen';
import { SelectStoreScreen } from '../screens/upload/SelectStoreScreen';
import { CameraScreen } from '../screens/upload/CameraScreen';

// --- Экраны Профиля (Личный кабинет) ---
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { NotificationsScreen } from '../screens/profile/NotificationsScreen';
import { SettingsScreen } from '../screens/profile/SettingsScreen';


// =================================================
// 2. НАСТРОЙКА СТЕКОВ (Группы экранов)
// =================================================

// --- СТЕК АВТОРИЗАЦИИ (Самый первый) ---
const AuthStack = createNativeStackNavigator();
function AuthStackScreen() {
  return (
    <AuthStack.Navigator 
      initialRouteName="Start" // <--- РЕШЕНИЕ ПРОБЛЕМЫ 2: Всегда начинаем с StartScreen
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="Start" component={StartScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="SmsCode" component={SmsCodeScreen} />
      <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
    </AuthStack.Navigator>
  );
}

// --- СТЕК ГЛАВНОЙ (Лента) ---
const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Feed" component={FeedScreen} />
      <HomeStack.Screen name="UserProfile" component={UserProfileScreen} />
      <HomeStack.Screen name="ShopDetails" component={ShopDetailsScreen} />
      <HomeStack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <HomeStack.Screen name="PostDetails" component={PostDetailsScreen} />
      <HomeStack.Screen name="SearchMain" component={SearchMainScreen} />
      <HomeStack.Screen name="CategoriesList" component={CategoriesListScreen} />
      <HomeStack.Screen name="SearchInput" component={SearchInputScreen} />
    </HomeStack.Navigator>
  );
}

// --- СТЕК ЗАГРУЗКИ (Плюс) ---
const UploadStack = createNativeStackNavigator();
function UploadStackScreen() {
  return (
    <UploadStack.Navigator screenOptions={{ headerShown: false }}>
      <UploadStack.Screen name="CreatePost" component={CreatePostScreen} />
      <UploadStack.Screen 
        name="SelectProduct" 
        component={SelectProductScreen} 
        options={{ animation: 'slide_from_right' }}
      />
      <UploadStack.Screen 
        name="SelectStore" 
        component={SelectStoreScreen} 
        options={{ animation: 'slide_from_right' }}
      />
      <UploadStack.Screen 
        name="Camera" 
        component={CameraScreen} 
        options={{ animation: 'fade', presentation: 'fullScreenModal' }}
      />
    </UploadStack.Navigator>
  );
}

// --- СТЕК ПРОФИЛЯ (Справа) ---
const ProfileStack = createNativeStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      {/* РЕШЕНИЕ ПРОБЛЕМЫ 1: Главный экран здесь - это профиль пользователя, а не вход */}
      <ProfileStack.Screen name="ProfileMain" component={ProfileScreen} />
      <ProfileStack.Screen name="Notifications" component={NotificationsScreen} />
      <ProfileStack.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ presentation: 'modal', headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
}

// =================================================
// 3. НИЖНИЙ НАВИГАТОР (ТАБЫ)
// =================================================
const Tab = createBottomTabNavigator();
function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2ECC71',
        tabBarInactiveTintColor: '#999',
        tabBarShowLabel: false,
        tabBarStyle: { height: 65, paddingBottom: 10, backgroundColor: '#fff' },
        tabBarIcon: ({ color }) => {
          let iconName: any;
          if (route.name === 'HomeTab') iconName = 'home';
          else if (route.name === 'UploadTab') iconName = 'plus-square';
          else if (route.name === 'ProfileTab') iconName = 'user';
          return <Feather name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStackScreen} />
      <Tab.Screen name="UploadTab" component={UploadStackScreen} />
      <Tab.Screen name="ProfileTab" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}

// =================================================
// 4. ГЛАВНЫЙ КОРНЕВОЙ НАВИГАТОР
// =================================================
const RootStack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <RootStack.Navigator 
      screenOptions={{ headerShown: false }} 
      initialRouteName="AuthStack" // <--- ВАЖНО: Приложение всегда стартует с AuthStack
    >
      {/* 1. Сначала работает AuthStack (Старт -> Вход -> Онбординг) */}
      <RootStack.Screen name="AuthStack" component={AuthStackScreen} />
      
      {/* 2. Когда в OnboardingScreen сделаем reset, попадаем сюда (Главное приложение) */}
      <RootStack.Screen name="MainTab" component={MainTabNavigator} />
    </RootStack.Navigator>
  );
}