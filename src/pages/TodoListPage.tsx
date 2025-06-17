import React from 'react';
import { TodoPage } from '@/components/todo/TodoPage';
import { MainLayout } from '@/components/layout/MainLayout';

const TodoListPage = () => {
  return (
    <MainLayout>
      <TodoPage />
    </MainLayout>
  );
};

export default TodoListPage;