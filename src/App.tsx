import { TransactionProvider } from './hooks/useTransactions';
import { NewTransactionModal } from './components/NewTransactionModal';
import { Dashboard } from './components/Dashboard';
import { useState } from 'react';
import { Header } from './components/Header';
import Modal from 'react-modal';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionProvider>
  );
}
