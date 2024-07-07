// src/hooks/useProtectedRoute.ts
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const useProtectedRoute = (requiredRole: 'user' | 'kol') => {
  const router = useRouter();
  const userRole = useSelector((state: RootState) => state.login.user?.role);
    console.log("dsd",userRole)
  useEffect(() => {
    if (userRole === null) {
      router.push('/login'); // Redirect to login page if not logged in
    } else if (userRole !== requiredRole) {
      router.push('/403'); // Redirect to 403 page if role does not match
    } else {
    }
  }, [userRole, requiredRole, router]);

  return ;
};