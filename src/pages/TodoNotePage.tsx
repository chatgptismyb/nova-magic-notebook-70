import React from 'react';
import { TodoNote } from '@/components/todo/TodoNote';
import { MainLayout } from '@/components/layout/MainLayout';

const TodoNotePage = () => {
  return (
    <MainLayout>
      <TodoNote />
    </MainLayout>
  );
};

export default TodoNotePage;