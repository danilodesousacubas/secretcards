package br.com.dsousa.cards;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SanityTest {

	@Test
	public void contextLoads() {
		System.out.println("Sanity Test");
	}
}
