<?php

namespace App\Http\Middleware;

use Closure;

class CheckToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(env('TOKEN_ACCESS') === $request->header('access_token')) {
            return $next($request);
        } else {
            abort(
                response()->json(['error' => 'Forbidden'], 403)
            );
        }
    }
}
