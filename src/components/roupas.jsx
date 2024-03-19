import "../css/styles.css";

function Roupas({ link, imageUrl, altText, className, title, titleClassName }) {
    return (
      <div className={className}>
        <a href={link}>
          <img src={imageUrl} alt={altText} />
          <p className={titleClassName}>{title}</p>
          
        </a>
      </div>
    );
  }
  export default Roupas;
  