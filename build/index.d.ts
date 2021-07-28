import { NextApiResponse, NextApiRequest } from "next";
import { ServerOptions } from "http-proxy";
export interface NextHttpProxyMiddlewareOptions extends ServerOptions {
    pathRewrite?: {
        [key: string]: string;
    };
    /** @type {(proxyReq: any, req: any) => boolean} Override proxyReq event handler. If return true, bypass the original event handler. */
    proxyReqOverride?: (proxyReq: any, req: any) => boolean;
}
/**
 * If a key pattern is found in `pathRewrite` that matches the url value,
 * replace matched string of url with the `pathRewrite` value.
 * @param req
 * @param pathRewrite
 */
export declare const rewritePath: (url: string, pathRewrite: {
    [key: string]: string;
}) => string;
/**
 * Next.js HTTP Proxy Middleware
 * @see https://nextjs.org/docs/api-routes/api-middlewares
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @param {NextHttpProxyMiddlewareOptions} httpProxyOptions
 */
declare const httpProxyMiddleware: (req: NextApiRequest, res: NextApiResponse<any>, httpProxyOptions?: NextHttpProxyMiddlewareOptions) => Promise<any>;
export default httpProxyMiddleware;
