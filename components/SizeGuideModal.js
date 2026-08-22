"use client"

import { useEffect, useState } from "react"
import styles from "./SizeGuideModal.module.css"

const SIZE_DATA = {
  tee: {
    title: "Oversized T-Shirt Size Guide",
    subtitle: "Heavyweight drop-shoulder oversized fit.",
    headers: [
      "Size",
      "Body Length",
      "Chest",
      "Sleeve",
      "Across Shoulder",
    ],
    rows: [
      {
        size: "XS",
        bodyLength: '27"',
        chest: '42"',
        sleeve: '8"',
        shoulder: '21"',
      },
      {
        size: "S",
        bodyLength: '28"',
        chest: '44"',
        sleeve: '9"',
        shoulder: '21.5"',
      },
      {
        size: "M",
        bodyLength: '29"',
        chest: '46"',
        sleeve: '10"',
        shoulder: '22"',
      },
      {
        size: "L",
        bodyLength: '30"',
        chest: '48"',
        sleeve: '11"',
        shoulder: '22.5"',
      },
      {
        size: "XL",
        bodyLength: '31"',
        chest: '50"',
        sleeve: '12"',
        shoulder: '23"',
      },
      {
        size: "2XL",
        bodyLength: '32"',
        chest: '52"',
        sleeve: '13"',
        shoulder: '23.5"',
      },
    ],
    note:
      "Measurements are taken from the finished garment. Allow ±0.5 in tolerance. True to size for the intended oversized fit.",
  },

  hoodie: {
    title: "Hoodie Size Guide",
    subtitle:
      "An effortless everyday layer built for comfort and movement.",
    headers: [
      "Size",
      "Body Length",
      "Chest",
      "Sleeve",
      "Across Shoulder",
    ],
    rows: [
      {
        size: "S",
        bodyLength: '27"',
        chest: '44"',
        sleeve: '25"',
        shoulder: '20"',
      },
      {
        size: "M",
        bodyLength: '28"',
        chest: '46"',
        sleeve: '26"',
        shoulder: '21"',
      },
      {
        size: "L",
        bodyLength: '29"',
        chest: '48"',
        sleeve: '27"',
        shoulder: '22"',
      },
      {
        size: "XL",
        bodyLength: '30"',
        chest: '50"',
        sleeve: '28"',
        shoulder: '23"',
      },
      {
        size: "2XL",
        bodyLength: '31"',
        chest: '52"',
        sleeve: '29"',
        shoulder: '24"',
      },
    ],
    note:
      "Measurements are taken from the finished garment. Allow ±0.5 in tolerance.",
  },

  sweatshirt: {
    title: "Sweatshirt Size Guide",
    subtitle:
      "A refined everyday essential with a relaxed fit and feel.",
    headers: [
      "Size",
      "Body Length",
      "Chest",
      "Sleeve",
      "Across Shoulder",
    ],
    rows: [
      {
        size: "S",
        bodyLength: '27"',
        chest: '44"',
        sleeve: '25"',
        shoulder: '20"',
      },
      {
        size: "M",
        bodyLength: '28"',
        chest: '46"',
        sleeve: '26"',
        shoulder: '21"',
      },
      {
        size: "L",
        bodyLength: '29"',
        chest: '48"',
        sleeve: '27"',
        shoulder: '22"',
      },
      {
        size: "XL",
        bodyLength: '30"',
        chest: '50"',
        sleeve: '28"',
        shoulder: '23"',
      },
      {
        size: "2XL",
        bodyLength: '31"',
        chest: '52"',
        sleeve: '29"',
        shoulder: '24"',
      },
    ],
    note:
      "Measurements are taken from the finished garment. Allow ±0.5 in tolerance.",
  },

  sweatpants: {
    title: "Sweatpants & Joggers Size Guide",
    subtitle:
      "Relaxed by design. Made for everyday comfort.",

    women: {
      headers: [
        "Size",
        "Waist",
        "Hips",
        "Thigh",
        "Inseam",
        "Outseam",
        "Knee",
      ],
      rows: [
        {
          size: "XS",
          waist: '28"',
          hips: '40"',
          thigh: '24"',
          inseam: '30"',
          outseam: '38"',
          knee: '15"',
        },
        {
          size: "S",
          waist: '30"',
          hips: '43"',
          thigh: '25"',
          inseam: '31"',
          outseam: '39"',
          knee: '16"',
        },
        {
          size: "M",
          waist: '32"',
          hips: '46"',
          thigh: '26"',
          inseam: '32"',
          outseam: '40"',
          knee: '17"',
        },
        {
          size: "L",
          waist: '34"',
          hips: '49"',
          thigh: '27"',
          inseam: '33"',
          outseam: '41"',
          knee: '18"',
        },
        {
          size: "XL",
          waist: '36"',
          hips: '52"',
          thigh: '28"',
          inseam: '34"',
          outseam: '42"',
          knee: '19"',
        },
        {
          size: "2XL",
          waist: '38"',
          hips: '55"',
          thigh: '29"',
          inseam: '35"',
          outseam: '43"',
          knee: '20"',
        },
      ],
    },

    men: {
      headers: [
        "Size",
        "Waist",
        "Hips",
        "Thigh",
        "Inseam",
        "Outseam",
        "Knee",
      ],
      rows: [
        {
          size: "XS",
          waist: '28"',
          hips: '38"',
          thigh: '24"',
          inseam: '27"',
          outseam: '39"',
          knee: '15"',
        },
        {
          size: "S",
          waist: '30"',
          hips: '40"',
          thigh: '25"',
          inseam: '28"',
          outseam: '40"',
          knee: '16"',
        },
        {
          size: "M",
          waist: '32"',
          hips: '42"',
          thigh: '26"',
          inseam: '29"',
          outseam: '41"',
          knee: '41"',
        },
        {
          size: "L",
          waist: '34"',
          hips: '44"',
          thigh: '27"',
          inseam: '30"',
          outseam: '42"',
          knee: '18"',
        },
        {
          size: "XL",
          waist: '36"',
          hips: '46"',
          thigh: '28"',
          inseam: '31"',
          outseam: '43"',
          knee: '19"',
        },
        {
          size: "2XL",
          waist: '38"',
          hips: '48"',
          thigh: '29"',
          inseam: '32"',
          outseam: '44"',
          knee: '20"',
        },
      ],
    },

    note:
      "Measurements are taken from the finished garment. Allow ±0.5 in tolerance.",
  },

  vest: {
    title: "Vest Size Guide",
    subtitle:
      "Lightweight and versatile. Built for sport.",
    headers: [
      "Size",
      "Chest Range",
      "Length",
      "Short Sleeve",
      "Long Sleeve",
      "Normal Chest",
    ],
    rows: [
      {
        size: "S",
        chest: '32–36"',
        length: '26"',
        shortSleeve: '13"',
        longSleeve: '28"',
        normalChest: '38"',
      },
      {
        size: "M",
        chest: '36–40"',
        length: '27"',
        shortSleeve: '14"',
        longSleeve: '29"',
        normalChest: '40"',
      },
      {
        size: "L",
        chest: '40–44"',
        length: '28"',
        shortSleeve: '15"',
        longSleeve: '30"',
        normalChest: '42"',
      },
      {
        size: "XL",
        chest: '44–48"',
        length: '29"',
        shortSleeve: '16"',
        longSleeve: '31"',
        normalChest: '44"',
      },
    ],
    note:
      "Measurements are taken from the finished garment. Allow ±0.5 in tolerance.",
  },

  cropTop: {
    title: "Crop Top Size Guide",
    subtitle:
      "Clean and versatile. Designed for the stylish dreamer.",
    noMeasurements: true,
    note:
      "The current Mwotaji 2026 tech pack does not include crop-top garment measurements yet.",
  },
}

function getProductType(product) {
  const text = `
    ${product?.name || ""}
    ${product?.slug || ""}
  `.toLowerCase()

  if (
    text.includes("crop top") ||
    text.includes("crop-top") ||
    text.includes("croptop")
  ) {
    return "cropTop"
  }

  if (text.includes("hoodie")) {
    return "hoodie"
  }

  if (text.includes("sweatshirt")) {
    return "sweatshirt"
  }

  if (
    text.includes("sweatpants") ||
    text.includes("jogger")
  ) {
    return "sweatpants"
  }

  if (text.includes("vest")) {
    return "vest"
  }

  if (
    text.includes("tee") ||
    text.includes("t-shirt") ||
    text.includes("tshirt")
  ) {
    return "tee"
  }

  return "tee"
}

export default function SizeGuideModal({
  isOpen,
  onClose,
  product,
}) {
  const [sweatpantFit, setSweatpantFit] =
    useState("women")

  const productType = getProductType(product)
  const chart = SIZE_DATA[productType]

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow =
      document.body.style.overflow

    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow =
        previousOverflow
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    )

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      )
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) return

    setSweatpantFit("women")
  }, [isOpen, productType])

  if (!isOpen) return null

  const activeChart =
    productType === "sweatpants"
      ? chart[sweatpantFit]
      : chart

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="presentation"
    >
      <div
        className={styles.modal}
        onClick={(event) =>
          event.stopPropagation()
        }
        role="dialog"
        aria-modal="true"
        aria-labelledby="size-guide-title"
      >
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close size guide"
        >
          ✕
        </button>

        <div className={styles.header}>
          <span className={styles.tag}>
            SIZE GUIDE
          </span>

          <h2
            id="size-guide-title"
            className={styles.title}
          >
            {chart.title}
          </h2>

          <p className={styles.subtitle}>
            {chart.subtitle}
          </p>
        </div>

        {productType === "sweatpants" && (
          <div className={styles.fitToggle}>
            <button
              type="button"
              className={
                sweatpantFit === "women"
                  ? styles.fitActive
                  : styles.fitButton
              }
              onClick={() =>
                setSweatpantFit("women")
              }
            >
              WOMEN
            </button>

            <button
              type="button"
              className={
                sweatpantFit === "men"
                  ? styles.fitActive
                  : styles.fitButton
              }
              onClick={() =>
                setSweatpantFit("men")
              }
            >
              MEN
            </button>
          </div>
        )}

        {!chart.noMeasurements && (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {activeChart.headers.map(
                    (header) => (
                      <th key={header}>
                        {header}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody>
                {activeChart.rows.map((row) => (
                  <tr key={row.size}>
                    <td
                      className={
                        styles.sizeCell
                      }
                    >
                      {row.size}
                    </td>

                    {productType === "tee" && (
                      <>
                        <td>
                          {row.bodyLength}
                        </td>
                        <td>{row.chest}</td>
                        <td>{row.sleeve}</td>
                        <td>
                          {row.shoulder}
                        </td>
                      </>
                    )}

                    {(productType ===
                      "hoodie" ||
                      productType ===
                        "sweatshirt") && (
                      <>
                        <td>
                          {row.bodyLength}
                        </td>
                        <td>{row.chest}</td>
                        <td>{row.sleeve}</td>
                        <td>
                          {row.shoulder}
                        </td>
                      </>
                    )}

                    {productType ===
                      "sweatpants" && (
                      <>
                        <td>{row.waist}</td>
                        <td>{row.hips}</td>
                        <td>{row.thigh}</td>
                        <td>{row.inseam}</td>
                        <td>{row.outseam}</td>
                        <td>{row.knee}</td>
                      </>
                    )}

                    {productType === "vest" && (
                      <>
                        <td>{row.chest}</td>
                        <td>{row.length}</td>
                        <td>
                          {row.shortSleeve}
                        </td>
                        <td>
                          {row.longSleeve}
                        </td>
                        <td>
                          {row.normalChest}
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {productType === "sweatpants" && (
          <>
            <div className={styles.lengthOptions}>
              <h3>Leg Length</h3>

              <p>
                Short, average and long length
                options are available in the
                production specification.
              </p>

              <div className={styles.lengthGrid}>
                <div>
                  <strong>SHORT</strong>
                  <span>
                    Shorter leg length
                  </span>
                </div>

                <div>
                  <strong>AVERAGE</strong>
                  <span>
                    Standard leg length
                  </span>
                </div>

                <div>
                  <strong>LONG</strong>
                  <span>
                    Longer leg length
                  </span>
                </div>
              </div>
            </div>

            {sweatpantFit === "men" && (
              <div className={styles.dataWarning}>
                <strong>
                  Measurement check
                </strong>

                <span>
                  The current tech pack lists
                  the Men's M knee measurement
                  as 41". This appears
                  inconsistent with the surrounding
                  grading and should be verified
                  before production.
                </span>
              </div>
            )}
          </>
        )}

        {chart.noMeasurements && (
          <div className={styles.noMeasurements}>
            <span
              className={
                styles.noMeasurementsIcon
              }
            >
              —
            </span>

            <div>
              <h3>
                Measurements coming soon
              </h3>

              <p>
                The product is available in the
                listed sizes, but the current
                2026 tech pack does not yet
                specify finished-garment
                crop-top measurements.
              </p>
            </div>
          </div>
        )}

        <div className={styles.noteBox}>
          <strong>
            Fit & measurement note:
          </strong>{" "}
          {chart.note}
        </div>
      </div>
    </div>
  )
}