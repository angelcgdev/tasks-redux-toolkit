import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { iTask } from '../Task/models/task.model';
import { clean } from '../../../redux/features/task/taskSlice';

export const DialogDetails = () => {

  const dialogRef = useRef<HTMLDialogElement>(null);
  const dispatch = useDispatch();
  const selectedTask = useSelector((state: RootState)=>state.task);
  const { title, description } = selectedTask;

  const handleClean = ()=> {
    dispatch(clean());
  }

  useEffect(() => {
    if(!!dialogRef.current){
      if(iTask.isEmpty(selectedTask)){
        // task = selectedTask;
        dialogRef.current.showModal();
      }else{
        dialogRef.current.close();
      }
    }
  }, [selectedTask])


  
  // function instanceOfTask(object: any): object is iTask {
  //   return ('id' in object) && ('title' in object) && ('description' in object) && ('completed' in object);
  // }

  

  return (
    <dialog ref={dialogRef} className='bg-slate-800 w-full max-w-full max-h-full h-full md:rounded-md md:max-w-xs md:h-min md:max-h-max relative'>
      <menu className='flex gap-3 select-none justify-end absolute top-0 right-0'>
        <button className='icon p-1 relative hover:!bg-transparent' id="cancel" type="reset" onClick={handleClean}>x</button>
      </menu>
      <section>
        <p className={`font-bold text-lg truncate`}>{title}</p>
        <p className={`truncate`}>{description}</p>
      </section>
    </dialog>
  )
}
