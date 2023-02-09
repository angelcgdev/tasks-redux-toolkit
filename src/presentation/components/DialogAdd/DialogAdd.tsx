import { useAddDialog } from './hooks/useAddDialog';


export const DialogAdd = () => {
    
    const { dialogRef, noteRef, handleOpen, handleSubmit, note, handleChange } = useAddDialog();

  return (
    <dialog id="favDialog" ref={dialogRef} className='bg-slate-800 w-full max-w-full max-h-full h-full md:rounded-md md:max-w-xs md:h-min md:max-h-max'>
        <form method="dialog" onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <section className='flex flex-col gap-4 w-full'>
                <input id='title' type='text' placeholder='TITULO' className='bg-transparent text-white focus:border-none focus:outline-none w-full font-semibold text-lg' value={note.title} onChange={handleChange}/>
                <textarea id='note' ref={noteRef} placeholder='Nota' className='bg-transparent text-white focus:border-none focus:outline-none w-full resize-none max-h-96' value={note.note} onChange={handleChange}/>
            </section>
            <menu className='flex gap-3 select-none'>
                <button id="cancel" type="reset" onClick={handleOpen}>Cancel</button>
                <button type="submit">Save</button>
            </menu>
        </form>
    </dialog>
  )
}
