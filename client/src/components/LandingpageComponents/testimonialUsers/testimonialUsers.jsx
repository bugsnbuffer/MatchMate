import css from "./testimonialUsers.module.css"
const TestimonialUser = (props) => {
    const {image,name}=props;
  return (
    <div className={css.main}>
    <img src={image}/>
    <div className={css.details}>
        <h1>lukmaan</h1>
        <h1>age 23</h1>
        <div className={css.prefrences}>
            <h1> vegitarian</h1>
            <h1>music lover</h1>
            <h1>guitar</h1>
        </div>
    </div>
    </div>
  )
}

export default TestimonialUser