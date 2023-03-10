import { TransactionsTable } from '../TranscationsTable';
import { Summary } from '../Summary';

import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
