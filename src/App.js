import Button from './sharecomponents/Button';
import './App.scss';

function App() {
  return (
    <div className='center'>
      <h1>Buttons</h1>
      {'<Button/>'}
      <br />
      <br />
      <Button />
      <br />
      <br />
      {"<Button variant = 'outline'/>"}
      <br />
      <br />
      <Button variant='outline' />
      <br />
      <br />
      {"<Button variant = 'text'/>"}
      <br />
      <br />
      <Button variant='text' />
      <br />
      <br />
      {'<Button disableShadow/>'}
      <br />
      <br />
      <Button disableShadow />
      <br />
      <br />
      {'<Button disabled/>'}
      <br />
      <br />
      <Button disabled />
      <br />
      <br />
      {'<Button variant="text" disabled/>'}
      <br />
      <br />
      <Button variant='text' disabled />
      <br />
      <br />
      {"<Button startIcon='local_grocery_store'/>"}
      <br />
      <br />
      <Button startIcon='local_grocery_store' />
      <br />
      <br />
      <br />
      <br />
      {"<Button endIcon='local_grocery_store'/>"}
      <br />
      <br />
      <Button endIcon='local_grocery_store' />
      <br />
      <br />
      {"<Button size='sm'/>"}
      <br />
      <br />
      <Button size='sm' color='primary' />
      <br />
      <br />
      {"<Button size='md'/>"}
      <br />
      <br />
      <Button size='md' color='primary' />
      <br />
      <br />
      {"<Button size='lg'/>"}
      <br />
      <br />
      <Button size='lg' color='primary' />
      <br />
      <br />
      {"<Button color='default'/>"}
      <br />
      <br />
      <Button color='default' />
      <br />
      <br />
      {"<Button color='primary'/>"}
      <br />
      <br />
      <Button color='primary' />
      <br />
      <br />
      {"<Button color='secondary'/>"}
      <br />
      <br />
      <Button color='secondary' />
      <br />
      <br />
      {"<Button color='danger'/>"}
      <br />
      <br />
      <Button color='danger' />
    </div>
  );
}

export default App;
