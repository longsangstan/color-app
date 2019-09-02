import React from "react";
import styled from "styled-components";

import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

interface BootstrapProps {
  colors: tinycolor.Instance[];
}

type variant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | undefined;

const Bootstrap: React.FC<BootstrapProps> = ({ colors }) => {
  const variants: variant[] = [
    "primary",
    "success",
    "danger",
    "warning",
    "info"
  ];

  const Alerts = (
    <>
      <style type="text/css">
        {`
      .alert {
          position: relative;
          padding: .75rem 1.25rem;
          margin-bottom: 1rem;
          border: 1px solid transparent;
          border-radius: .25rem;
      }

      .alert-primary {
          color: ${colors[0].toHexString()};
          background-color: ${colors[0]
            .clone()
            .brighten(40)
            .toHexString()};
          border-color: ${colors[0]
            .clone()
            .brighten(30)
            .toHexString()};
      }

      .alert-success {
          color: ${colors[1].toHexString()};
          background-color: ${colors[1]
            .clone()
            .brighten(40)
            .toHexString()};
          border-color: ${colors[1]
            .clone()
            .brighten(30)
            .toHexString()};
      }

      .alert-danger {
          color: ${colors[2].toHexString()};
          background-color: ${colors[2]
            .clone()
            .brighten(40)
            .toHexString()};
          border-color: ${colors[2]
            .clone()
            .brighten(30)
            .toHexString()};
      }

      .alert-warning {
          color: ${colors[3].toHexString()};
          background-color: ${colors[3]
            .clone()
            .brighten(40)
            .toHexString()};
          border-color: ${colors[3]
            .clone()
            .brighten(30)
            .toHexString()};
      }

      .alert-info {
          color: ${colors[4].toHexString()};
          background-color: ${colors[4]
            .clone()
            .brighten(40)
            .toHexString()};
          border-color: ${colors[4]
            .clone()
            .brighten(30)
            .toHexString()};
      }
    `}
      </style>
      {variants.map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );

  const Buttons = (
    <>
      <style type="text/css">
        {`
          .btn {
            display: inline-block;
            font-weight: 400;
            color: #212529;
            text-align: center;
            vertical-align: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-color: transparent;
            border: 1px solid transparent;
            padding: .375rem .75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: .25rem;
            transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
          }

          .btn-primary {
            color: #fff;
            background-color: ${colors[0].toHexString()};
            border-color: ${colors[0].toHexString()};
          }

          .btn-success {
            color: #fff;
            background-color: ${colors[1].toHexString()};
            border-color: ${colors[1].toHexString()};
          }

          .btn-danger {
            color: #fff;
            background-color: ${colors[2].toHexString()};
            border-color: ${colors[2].toHexString()};
          }

          .btn-warning {
            color: #fff;
            background-color: ${colors[3].toHexString()};
            border-color: ${colors[3].toHexString()};
          }

          .btn-info {
            color: #fff;
            background-color: ${colors[4].toHexString()};
            border-color: ${colors[4].toHexString()};
          }

          .btn-outline-primary {
            color: ${colors[0].toHexString()};
            border-color: ${colors[0].toHexString()};
          }

          .btn-outline-success {
            color: ${colors[1].toHexString()};
            border-color: ${colors[1].toHexString()};
          }

          .btn-outline-danger {
            color: ${colors[2].toHexString()};
            border-color: ${colors[2].toHexString()};
          }

          .btn-outline-warning {
            color: ${colors[3].toHexString()};
            border-color: ${colors[3].toHexString()};
          }

          .btn-outline-info {
            color: ${colors[4].toHexString()};
            border-color: ${colors[4].toHexString()};
          }
        `}
      </style>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {variants.map((variant, idx) => (
          <div style={{ margin: 4 }}>
            <Button key={idx} variant={variant}>
              {variant}
            </Button>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {variants.map((variant, idx) => (
          <div style={{ margin: 4 }}>
            <Button key={idx} variant={("outline-" + variant) as variant}>
              {variant}
            </Button>
          </div>
        ))}
      </div>
    </>
  );

  return <div>{Buttons}</div>;
};

export default Bootstrap;
