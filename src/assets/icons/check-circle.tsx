import { type TIcons } from '@/types';

export default function CheckCircleIcon({ className, ...rest }: TIcons) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <rect
        x="0.307495"
        y="0.16748"
        width="24"
        height="23.2723"
        rx="11.6361"
        fill="#E4F5F4"
      />
      <path
        d="M16.9282 7.40741C17.0027 7.33145 17.0916 7.2711 17.1896 7.2299C17.2877 7.1887 17.393 7.16748 17.4994 7.16748C17.6057 7.16748 17.711 7.1887 17.8091 7.2299C17.9071 7.2711 17.996 7.33145 18.0705 7.40741C18.3825 7.72269 18.3868 8.23216 18.0814 8.55289L11.6307 16.1785C11.5574 16.2589 11.4686 16.3236 11.3695 16.3685C11.2704 16.4134 11.1632 16.4376 11.0545 16.4396C10.9457 16.4416 10.8377 16.4215 10.737 16.3803C10.6363 16.3392 10.5451 16.2779 10.4688 16.2003L6.54367 12.2228C6.39229 12.0684 6.3075 11.8608 6.3075 11.6446C6.3075 11.4284 6.39229 11.2208 6.54367 11.0664C6.61812 10.9904 6.70698 10.9301 6.80505 10.8889C6.90311 10.8477 7.00841 10.8265 7.11478 10.8265C7.22114 10.8265 7.32644 10.8477 7.4245 10.8889C7.52257 10.9301 7.61143 10.9904 7.68588 11.0664L11.0154 14.4406L16.9064 7.43141C16.9132 7.42298 16.9205 7.41497 16.9282 7.40741Z"
        fill="#009D94"
      />
    </svg>
  );
}
