import { Card, Button } from "react-bootstrap";

function News(props) {
  const article = props.article;
  const {
    headline,
    byline,
    abstract,
    lead_paragraph,
    word_count,
    news_desk,
    web_url,
    section_name,
  } = article;
  return (
    <Card style={{ width: "1000px" }} className="custom-card-body">
      <Card.Header>{headline.main}</Card.Header>
      <Card.Body>
        <Card.Title>{abstract}</Card.Title>
        <Card.Text>{lead_paragraph}</Card.Text>
        <div>
          <ul>
            <li><span className="cap-span">Byline:</span>{byline.original}</li>
            <li><span className="cap-span">News Desk:</span>{news_desk}</li>
            <li><span className="cap-span">Section:</span>{section_name}</li>
            <li><span className="cap-span">Word Count:</span>{word_count}</li>
          </ul>
        </div>
        <a href={web_url} target="_blank" rel="noreferrer">
          <Button variant="primary">Web Resource</Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default News;

