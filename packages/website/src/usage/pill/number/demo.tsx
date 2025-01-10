import React from "react";
import { AdmiraltyPill } from "@ukho/admiralty-react";

export default function Demo() {
  return <>
    <AdmiraltyPill text="Filter One" number="5" style={{ 'padding': '5px'}}></AdmiraltyPill>
    <AdmiraltyPill text="Filter One" number="50" style={{ 'padding': '5px'}}></AdmiraltyPill>
    <AdmiraltyPill text="Filter One" number="500" style={{ 'padding': '5px'}}></AdmiraltyPill>
  </>;
}
