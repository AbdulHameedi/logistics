import { SVGProps } from "react"

export function Sun(props: SVGProps<SVGSVGElement>) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M11 5V1h2v4zm6.65 2.75l-1.375-1.375l2.8-2.875l1.4 1.425zM19 13v-2h4v2zm-8 10v-4h2v4zM6.35 7.7L3.5 4.925l1.425-1.4L7.75 6.35zm12.7 12.8l-2.775-2.875l1.35-1.35l2.85 2.75zM1 13v-2h4v2zm3.925 7.5l-1.4-1.425l2.8-2.8l.725.675l.725.7zM12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18"></path></svg>
    )
}
export function Moon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M14 22q-2.075 0-3.9-.788t-3.175-2.137T4.788 15.9T4 12t.788-3.9t2.137-3.175T10.1 2.788T14 2q.875 0 1.75.175t1.675.525q.3.125.45.387t.15.538q0 .225-.088.425t-.287.35q-1.75 1.375-2.7 3.375T14 12q0 2.25.925 4.25t2.7 3.35q.2.15.288.363T18 20.4q0 .275-.15.538t-.45.387q-.8.35-1.662.513T14 22"></path></svg>
    )
}
export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z"/></svg>
  )
}
export function ArrowLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225z"/></svg>
  )
}
export function Circle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
  )
}