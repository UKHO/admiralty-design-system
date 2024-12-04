import React from "react";

export default function Demo() {
  return (
    <>
      <div>
        <article>
          <section>
            <h1>
              You do not have the necessary
              <br /> permissions to view this page
            </h1>
          </section>
          <div>
            <div>
              <article>
                <div>
                  <p>
                    Please{' '}
                    <a href="#">
                      <strong>log in again.</strong>
                    </a>{' '}
                    If that does not work, contact Customer Services.
                  </p>
                  <p>
                    Email:{' '}
                    <a href="mailto:customerservices@ukho.gov.uk?subject=UKHO%20Data%20Upload%20Permissions%20Issue">
                      <strong>customerservices@ukho.gov.uk</strong>
                    </a>
                    <br />
                    We aim to respond within two working days.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </article>
      </div>
      </>
      );
    }

