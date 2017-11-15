package br.com.dsousa.cards.config;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
//
//
//// When @EnableWebSecurity is on then @Component shouldnt be used else the filter will be registered twice
//@Component
//public class CorsFilter implements javax.servlet.Filter {
//	@Override
//	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
//		HttpServletResponse res = (HttpServletResponse) response;
//		HttpServletRequest  req = (HttpServletRequest) request;
//
//    res.setHeader("Access-Control-Allow-Origin", "*");
//    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
//		res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding, Accept-Language, Host, Referer, Connection, User-Agent, authorization, sw-useragent, sw-version");
//
//		// Just REPLY OK if request method is OPTIONS for CORS (pre-flight)
//		if ( req.getMethod().equals("OPTIONS") ) {
//        res.setStatus(HttpServletResponse.SC_OK);
//        return;
//    }
//		chain.doFilter(request, response);
//	}
//
//	@Override
//	public void destroy() {}
//
//	@Override
//	public void init(FilterConfig filterConfig) throws ServletException {}
//}
import org.springframework.stereotype.Component;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
class CorsFilter implements Filter {

public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {

    HttpServletRequest request = (HttpServletRequest) req;

    HttpServletResponse response = (HttpServletResponse) res;

    response.addHeader("Access-Control-Allow-Origin", "*");

    String options = HttpMethod.OPTIONS.toString();

    if (options.equalsIgnoreCase(request.getMethod())) {

        response.setHeader("Access-Control-Allow-Methods", "POST,GET,DELETE,PUT,OPTIONS");

        response.setHeader("Access-Control-Max-Age", "3600");

        response.setHeader("Access-Control-Allow-Headers", "content-type,access-control-request-headers,access-control-request-method,accept,origin,authorization,x-requested-with");

        response.setStatus(HttpServletResponse.SC_OK);

    } else {

        chain.doFilter(req, res);

    }

}

@Override
public void init(FilterConfig filterConfig) throws ServletException {}

@Override
public void destroy() {}


}