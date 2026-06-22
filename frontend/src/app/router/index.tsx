import { type ComponentType } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { PublicLayout } from './public-routes'
import { AdminLayout } from '@/shared/components/layout'

function lazyRoute(importFn: () => Promise<{ default: ComponentType }>) {
  return async () => {
    const mod = await importFn()
    return { Component: mod.default }
  }
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, lazy: lazyRoute(() => import('@/modules/institutional/presentation/pages/HomePage')) },
      { path: 'sobre', lazy: lazyRoute(() => import('@/modules/institutional/presentation/pages/AboutPage')) },
      { path: 'mcmv', lazy: lazyRoute(() => import('@/modules/institutional/presentation/pages/McmvPage')) },
      { path: 'como-participar', lazy: lazyRoute(() => import('@/modules/institutional/presentation/pages/HowToJoinPage')) },
      { path: 'faq', lazy: lazyRoute(() => import('@/modules/institutional/presentation/pages/FaqPage')) },
      { path: 'contato', lazy: lazyRoute(() => import('@/modules/institutional/presentation/pages/ContactPage')) },
      { path: 'cadastro', lazy: lazyRoute(() => import('@/modules/registration/presentation/pages/CadastroPage')) },
      { path: 'cadastro/sucesso', lazy: lazyRoute(() => import('@/modules/registration/presentation/pages/CadastroSucessoPage')) },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to="/admin/dashboard" replace /> },
      { path: 'login', lazy: lazyRoute(() => import('@/modules/auth/presentation/pages/LoginPage')) },
      { path: 'esqueci-senha', lazy: lazyRoute(() => import('@/modules/auth/presentation/pages/ForgotPasswordPage')) },
      { path: 'dashboard', lazy: lazyRoute(() => import('@/modules/candidates/presentation/pages/DashboardPage')) },
      { path: 'candidatos', lazy: lazyRoute(() => import('@/modules/candidates/presentation/pages/CandidatesListPage')) },
      { path: 'candidatos/:id', lazy: lazyRoute(() => import('@/modules/candidates/presentation/pages/CandidateDetailPage')) },
      { path: 'conteudo', lazy: lazyRoute(() => import('@/modules/institutional/presentation/pages/ContentManagerPage')) },
    ],
  },
])
