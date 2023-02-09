import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { handleOpenDialogAdd } from "../../../../redux/features/ui/uiSlice";
import { iTask } from "../../Task/models/task.model";
import { add } from "../../../../redux/features/tasks/tasksSlice";

const initState = {title: '', note: ''};

export const useAddDialog = ()=>{
    

    const { addIsOpen } =useSelector((state: RootState)=>state.ui);
    const dispatch = useDispatch();
    const [ note, setNote ] = useState(initState);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const noteRef = useRef<HTMLTextAreaElement>(null);
    
    const uid = ()=>{
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    const handleClose = ()=>{
        setNote(initState);
        dispatch(handleOpenDialogAdd());
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>)=> {
        const id = e.target.id;
        const value = e.target.value;
        setNote({...note, [id]: value})
    }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        const id = uid();
        const newTask:iTask =  {id, description: note.note,  title: note.title, completed: false}
        dispatch(add(newTask));
        handleClose();
    }
    
    useEffect(()=>{
        if(!!dialogRef.current){

            if(addIsOpen){
                dialogRef.current.showModal();
            }
            if(!addIsOpen){
                dialogRef.current.close();
            }

        }
    }, [addIsOpen])

    const OnInput = ()=>{
        const scroll = noteRef.current?.scrollHeight;
            
        if(noteRef.current?.value===''){
            noteRef.current?.setAttribute('style', `height: 40px;` )
        }else{
            noteRef.current?.setAttribute('style', `height: ${scroll}px;` )
        }
    }

    useEffect(() => {
        if(addIsOpen){
            noteRef.current?.addEventListener("input", OnInput, false);
        }
        if(!addIsOpen){
            noteRef.current?.removeEventListener("input", OnInput, false);

        }
    }, [noteRef.current])


    return {
        dialogRef,
        noteRef,
        handleSubmit,
        handleOpen: handleClose,
        handleChange,
        note,
    }
}