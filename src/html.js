import React from "react";
import PropTypes from "prop-types";

class HTML extends React.Component {
  componentDidMount() {
    document.write("<meta http-equiv='Content-Security-Policy' content=\"default-src 'self'\">");
  }

  render() {
    return (
      <html lang="en" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta httpEquiv="X-XSS-Protection" content="1; mode=block"></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          <script dangerouslySetInnerHTML={{
            __html:
              `(function() {
                  try {
                    var banner = sessionStorage.getItem('banner');
                    if (banner === null)
                      document.body.classList.add('banner1');
                    else
                      document.body.classList.add('banner' + banner);
                  } catch (e) {
                    return;
                  }
              })();`,
          }}
          />
          {this.props.preBodyComponents}
          <div
            key={"body"}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};

export default HTML;
