function Section({
  title = "",
  titleAlign = "",
  className = "",
  children = "",
}) {
  return (
    <div
      className={`bg-neutral-800/50 backdrop-blur-lg p-8 rounded-3xl border border-neutral-600/60 mb-4 overflow-hidden ${className}`}
    >
      {title ? (
        <h2
          className={`text-2xl font-bold ${children ? "mb-8" : "mb-0"} ${titleAlign === "center" ? "text-center" : titleAlign === "right" ? "text-right" : "text-left"}`}
        >
          {title}
        </h2>
      ) : null}
      {children ? <div>{children}</div> : null}
    </div>
  );
}

export default Section;
