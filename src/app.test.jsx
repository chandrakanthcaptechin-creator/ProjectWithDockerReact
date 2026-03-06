import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
// vitest.setup.js
import '@testing-library/jest-dom'; // adds toBeInTheDocument() and other matchers
beforeEach(() => {
  global.fetch = vi.fn();
});

test('Employee Management App CRUD operations', async () => {
  fetch
    .mockResolvedValueOnce({
      ok: true,
      json: async () => [{ _id: '1', empID: '101', name: 'John Doe', DOJ: '2025-01-01', resign: 'N', DOR: '' }],
    })
    .mockResolvedValueOnce({ ok: true, json: async () => ({}) })
    .mockResolvedValueOnce({
      ok: true,
      json: async () => [{ _id: '2', empID: '1', name: 'Chandrakanth', DOJ: '2026-03-02', resign: 'N', DOR: '' }],
    })
    .mockResolvedValueOnce({ ok: true, json: async () => ({}) })
    .mockResolvedValueOnce({
      ok: true,
      json: async () => [{ _id: '2', empID: '1', name: 'Chandru', DOJ: '2026-03-02', resign: 'N', DOR: '' }],
    })
    .mockResolvedValueOnce({ ok: true, json: async () => ({}) })
    .mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

  render(<App />);
const existingEmployee = await screen.findByText('John Doe');
expect(existingEmployee).toBeInTheDocument(); // ✅ now works 
  fireEvent.change(screen.getByPlaceholderText('Employee ID'), { target: { value: '1' } });
  fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'Chandrakanth' } });
  fireEvent.change(screen.getByPlaceholderText('Date of Joining'), { target: { value: '2026-03-02' } });
  fireEvent.change(screen.getByPlaceholderText('Resign (Y/N)'), { target: { value: 'N' } });
  fireEvent.change(screen.getByPlaceholderText('Date of Resign'), { target: { value: '' } });

  fireEvent.click(screen.getByText('Save'));

  const newEmployee = await screen.findByText('Chandrakanth');
  expect(newEmployee).toBeInTheDocument();

  const editButton = screen.getByText('Edit');
  fireEvent.click(editButton);

  const nameInput = screen.getByPlaceholderText('Name');
  fireEvent.change(nameInput, { target: { value: 'Chandru' } });

  fireEvent.click(screen.getByText('Update'));

  const updatedEmployee = await screen.findByText('Chandru');
  expect(updatedEmployee).toBeInTheDocument();

  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);

  await waitFor(() => expect(screen.queryByText('Chandru')).not.toBeInTheDocument());
});