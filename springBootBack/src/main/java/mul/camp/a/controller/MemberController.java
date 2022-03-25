package mul.camp.a.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import mul.camp.a.dto.MemberDto;
import mul.camp.a.service.MemberService;

@RestController
public class MemberController {

	@Autowired
	MemberService service;
	
	@GetMapping("base")
	public String base() {
		System.out.println("base 잘됨");
		
		return "123";
	}

	@RequestMapping(value="/getId", method= {RequestMethod.GET, RequestMethod.POST})
		public String getId(MemberDto dto) {
		System.out.println("MemberController getID");
		
		boolean b = service.getId(dto);
		if(b) {
			return "NO"; //1이상이란 말, 이미 아이디가 존재한다는 말이라서 사용이 안된다
		}
		return "OK";
	}
	
	@RequestMapping(value="/addmember", method= {RequestMethod.GET, RequestMethod.POST})
	public String addmember(MemberDto dto) {
		System.out.println("MemberController addmember");		
		boolean b = service.addmember(dto);
		
	if(b) {
		return "YES";
	}
	return "NO";
	}
	
	@RequestMapping(value="/login", method= {RequestMethod.GET, RequestMethod.POST})
	public MemberDto login(MemberDto dto, HttpServletRequest req) {
		System.out.println("MemberController login");	
		System.out.println(dto.toString());	
	
		MemberDto mem = service.login(dto);
		
		//이렇게 사용할수 있다는 말
		req.getSession().setAttribute("login", mem);
		
		
		return mem;
	}
	
	@RequestMapping(value="/dbTest")
	public List<MemberDto> dbTest(){
		System.out.println("HelloContoller dbTest()");
		
		List<MemberDto> list = service.allMember();
		
		return list;
	}
	
	

}

