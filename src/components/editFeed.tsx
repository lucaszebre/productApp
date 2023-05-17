import React from 'react'
import Image from 'next/image'
import styles from '@/styles/editfeed.module.css'
import Goback from './goback'
import { z , ZodType} from "zod";
import { useForm } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';

const editFeed = () => {
    const dispatch = useDispatch();
    const display = useSelector((state: RootState) => state.display);
    
    const Schema : ZodType = z.object({
        feedbackTitle:z.string().min(1,'must put a feedback title'),
        newStatus:z.string().min(1,'must put a new status'),
        Category:z.string().min(1,'must choose a category'),
        feedbackDetails:z.string().min(1,'must put some details').max(120,' too long'),
    })
    type SchemaType = z.infer<typeof Schema>;

    const {register,watch, handleSubmit,control,formState:{errors}} = useForm<SchemaType>({resolver:zodResolver(Schema)})

    const submitData = async ( data:SchemaType ) => {
        const watched = watch()
                        // Prepare the invoice data in the format expected by the function
        console.log(watched)
    }
    return (
        <div className={styles.editFeedWrapper}>
            <Goback />
            <div className={styles.newFeed}>
                    <Image className={styles.newFeedRound} src='/assets/shared/icon-edit-feedback.svg' alt='icon-edit-feedback' width={56} height={56}/>
                
                <h1 className={styles.newFeedTitle}>
                    Edit 
                </h1>
                <form action="" className={styles.newFeedForm} onSubmit={handleSubmit(submitData)}>
                    <label className={styles.newFeedLabel} htmlFor="">
                        Feedback Title
                    </label>
                    <p className={styles.newFeedP}>
                        Add a short , descriptive headline
                    </p>
                    <input type="text" className={styles.newFeedInput} 
                    style={errors.feedbackTitle ? { border: '1px solid #EC5757' } : {}}
                    {...register("feedbackTitle")} 
                    />
                    {errors.feedbackTitle && <p className={styles.ErrorText}>{String(errors.feedbackTitle.message)}</p>}
                    <label className={styles.newFeedLabel} htmlFor="">
                        Category
                    </label>
                    <p className={styles.newFeedP}>
                        Choose a category for your feedback
                    </p>
                    <select  id="" className={styles.newFeedSelect} 
                    style={errors.Category ? 
                    { border: '1px solid #EC5757' } : {}}
                    {...register("Category")} 
                    >
                        <option value="features">features</option>
                        <option value="UX">UX</option>
                        <option value="UI">UI</option>
                        <option value="Enhancement">Enhancement</option>
                        <option value="Bug">Bug</option>
                    </select>
                    {errors.Category && <p className={styles.ErrorText}>{String(errors.Category.message)}</p>}
                    <label className={styles.newFeedLabel} htmlFor="">
                        Update Status
                    </label>
                    <p className={styles.newFeedP}>
                        Change feature state
                    </p>
                    <select id="" className={styles.newFeedSelect}
                    style={errors.newStatus ? { border: '1px solid #EC5757' } : {}}
                    {...register("newStatus")}  >
                        <option value="planned">Planned</option>
                        <option value="in-progress">In-Progress</option>
                        <option value="live">Live</option>
                    </select>
                    {errors.newStatus && <p className={styles.ErrorText}>{String(errors.newStatus.message)}</p>}
                    <label className={styles.newFeedLabel} htmlFor="">
                        Feedback Details
                    </label>
                    <p className={styles.newFeedP}>
                        Include any specific comment on what should be improved , added, etc.
                    </p>
                    <textarea  className={styles.newfeedTextArea}  id="" cols={30} rows={10}
                    style={errors.feedbackTitle ? { border: '1px solid #EC5757' } : {}}
                    {...register("feedbackDetails")} />
                    {errors.feedbackDetails && <p className={styles.ErrorText}>{String(errors.feedbackDetails.message)}</p>}
                    <div className={styles.newFeedBottom}>
                        <button className={styles.newFeedDelete}>
                            Delete
                        </button>
                        <div className={styles.newFeedBottomblock}>
                            <button type='submit' className={styles.newFeedSave}>
                                Save Changes
                            </button> <button className={styles.newFeedCancel}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default editFeed