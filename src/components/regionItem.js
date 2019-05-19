import React from "react";

export default function ReginItem({ regionItem, chooseRegion }) {
  return (
    <li onClick={() => chooseRegion(regionItem)}>
      <i class="fas fa-chevron-right" />
      <span style={{ marginLeft: "5px" }}> {regionItem}</span>
    </li>
  );
}
