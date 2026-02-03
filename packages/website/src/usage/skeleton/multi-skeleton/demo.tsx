import React from "react";
import { AdmiraltySkeleton } from "@ukho/admiralty-react/dist";

export default function Demo() {
  return <div>
    <div>
      <AdmiraltySkeleton width="300px" height="300px" radius="10rem"></AdmiraltySkeleton>
    </div>
    <div>
      <AdmiraltySkeleton width="100px" height="20px" radius=".5rem"></AdmiraltySkeleton>
      <AdmiraltySkeleton width="100px" height="20px" radius=".5rem"></AdmiraltySkeleton>
      <AdmiraltySkeleton width="100px" height="20px" radius=".5rem"></AdmiraltySkeleton>
    </div>
    <div>
      <AdmiraltySkeleton width="310px" height="20px" radius=".5rem"></AdmiraltySkeleton>
    </div>
    <div>
      <AdmiraltySkeleton width="200px" height="20px" radius=".5rem"></AdmiraltySkeleton>
    </div>
    <div>
      <AdmiraltySkeleton width="250px" height="20px" radius=".5rem"></AdmiraltySkeleton>
    </div>
    <div>
      <AdmiraltySkeleton width="300px" height="20px" radius=".5rem"></AdmiraltySkeleton>
    </div>
    <div>
      <AdmiraltySkeleton width="310px" height="100px" radius=".5rem"></AdmiraltySkeleton>
    </div>
    <div>
      <AdmiraltySkeleton width="152px" height="100px" radius=".5rem"></AdmiraltySkeleton>
      <AdmiraltySkeleton width="152px" height="100px" radius=".5rem"></AdmiraltySkeleton>
    </div>
  </div>;
}
