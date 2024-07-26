import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useForm } from 'react-hook-form'
import css from '../CssStyles.module.css'
import { createTodo } from '../../../services/todo/todo'

const AddModule = (props) => {
   const {
      register;
      formState: { errors },
      handleSubmit,
   } = useForm({ mode: 'onSubmit' })
   const onsubmit = (data) => {
      createTodo(data).then((r) => {
         props.create({ title: data.Title, description: data.Description, date: r.date, id: r.id })
      })
   }

         <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>Create new Todo Item</DialogTitle>
            <DialogActions></DialogActions>
         </Dialog>

}

export default AddModule
