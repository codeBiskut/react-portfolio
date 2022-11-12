import resume from '../../assets/Joshua_Rinehart_Resume.pdf'

function ResumePage(){
    return(
        <div className='pdf-size' id='resume-page'>
            <iframe src={resume} width="100%" height="1000px"/>

        </div>
    )
}

export default ResumePage;