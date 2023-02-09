import './App.css'
import { BtnAdd } from './components/BtnAdd/BtnAdd';
import { DialogAdd } from './components/DialogAdd/DialogAdd';
import { DialogDetails } from './components/DialogDetails/DialogDetails';
import { ListTasks } from './components/ListTasks/ListTasks';

function App() {

  return (
    <>
      <div className="bg-slate-900 w-full min-h-screen flex flex-col justify-center items-center gap-5 p-6 relative">
        <div className='sticky top-0 z-10 bg-slate-900 w-full p-3 flex justify-between max-w-screen-2xl'>
          <div></div>
          <h1 className='font-bold text-white text-lg'>My Tasks</h1>
          <BtnAdd/>
        </div>
        <ListTasks/>
      </div>
      <DialogAdd/>
      <DialogDetails/>
    </>
  )
}

export default App
