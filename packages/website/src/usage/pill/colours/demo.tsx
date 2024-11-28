import React from "react";
import { AdmiraltyPill } from "@ukho/admiralty-react";

export default function Demo() {
  return <>
    <AdmiraltyPill text="Filter One" colour="admiralty-blue" style={{ 'padding': '5px'}}></AdmiraltyPill>
    <AdmiraltyPill text="Filter One" colour="white" style={{ 'padding': '5px'}}></AdmiraltyPill>
    <AdmiraltyPill text="Filter One" colour="bright-blue" style={{ 'padding': '5px'}}></AdmiraltyPill>
  </>;
}
