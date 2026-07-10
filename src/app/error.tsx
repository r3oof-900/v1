"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-danger/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">⚠️</span>
        </div>
        <h2 className="text-xl font-bold text-main mb-2">حدث خطأ غير متوقع</h2>
        <p className="text-muted text-sm mb-8 max-w-sm mx-auto">
          نعتذر عن هذا الخطأ. يرجى المحاولة مرة أخرى أو التواصل معنا إذا استمرت المشكلة.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-xl gold-gradient text-white font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          حاول مرة أخرى
        </button>
      </div>
    </div>
  );
}
