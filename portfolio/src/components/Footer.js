import { Link } from "react-router-dom"

export default function Footer() {

    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className="footer-bottom-page-content">
            <div className="content-footer">
                <div className="copyright">
                    <h3>Todos direitos são reservados. Copyright ©{year}</h3>
                    <div className="rightside">
                        <Link to={"https://www.linkedin.com/in/vinicius-santos-339428286/"} target='_blank'><i className="fa-brands fa-linkedin"></i> </Link>
                        <Link to={"https://github.com/vinicius-santosrc"} target='_blank'><i className="fa-brands fa-github"></i> </Link>
                    </div>
                </div>
            </div>
        </footer >
    )
}