import { Task } from '../Task/Task'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

export const ListTasks = () => {

    
  const tasks = useSelector((state: RootState)=>state.tasks);

  return (
    <ul className='flex flex-wrap justify-center gap-4 w-full max-w-screen-2xl  pb-4'>
      {
        tasks.length>0
        ?tasks.map((task, index)=>(
          <li key={index} className='w-full sm:w-2/5 md:w-1/4 xl:w-1/5'>
            <Task task={task} ></Task>
          </li>
        ))
        :<span className='text-white text-center'> 😾 hey tú!!!, registra tu primera nota para empezar 😺.</span>
      }
    </ul>
  )
}
